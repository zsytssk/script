import axios from 'axios';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

interface ImgConfig {
    url: string;
    fileName: string;
}

const downloadCanvasImg = async (
    filename: string,
    list: HTMLCanvasElement[],
) => {
    if (!list || list.length === 0) {
        return false;
    }
    if (list.length === 1) {
        return downloadImg(list[0]);
    } else {
        return downloadZip(filename, list);
    }
};

export const downloadImg = (canvas: HTMLCanvasElement) => {
    return new Promise<boolean>((resolve) => {
        const img = new Image();
        const fileName = canvas.getAttribute('data-name');
        // 画图操作
        img.src = canvas.toDataURL('image/png');
        img.onload = () => {
            const link = document.createElement('a');
            link.href = img.src;
            link.download = `${fileName}.png`;
            const event = new MouseEvent('click'); // 创建一个单击事件
            link.dispatchEvent(event); // 主动触发a标签的click事件下载
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
        img.onabort = () => {
            resolve(false);
        };
    });
};

export const downloadZip = (filename: string, list: HTMLCanvasElement[]) => {
    const imgList: ImgConfig[] = [];
    list.forEach((item) => {
        const config = getLocalImgConfig(item);
        imgList.push(config);
    });
    return batchDownLoad(filename, imgList)
        .then(() => {
            console.log(`test:>download:>4`);
            return true;
        })
        .catch(() => {
            return false;
        });
};

export const getLocalImgConfig = (canvas): ImgConfig => {
    const base64Str = canvas.toDataURL('image/png');
    const fileName = canvas.getAttribute('data-name');
    const bytes = window.atob(base64Str.split(',')[1]); //base64Str是base64编码的字符串
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    const image = new Blob([ab], { type: 'image/png' });
    const url = URL.createObjectURL(image);
    return {
        url,
        fileName,
    };
};

const batchDownLoad = async (filename: string, imgList: ImgConfig[]) => {
    const zip = new JSZip();
    const task: Promise<void>[] = [];
    await imgList.forEach((item) => {
        const promise = getFile(item.url).then(async (imgData) => {
            // 下载文件, 并存成ArrayBuffer对象
            // @ts-ignore
            await zip.file(item.fileName + '.png', imgData, {
                binary: true,
            }); // 逐个添加文件
        });
        task.push(promise);
    });
    console.log(`test:>download:>1`);
    return Promise.all(task).then(() => {
        console.log(`test:>download:>2`);
        return zip
            .generateAsync({
                type: 'blob',
            })
            .then((content) => {
                // 生成二进制流
                console.log(`test:>download:>3`);
                return saveAs(content, `${filename || '二维码'}.zip`); // 利用file-saver保存文件
            });
    });
};

const getFile = (url) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            responseType: 'arraybuffer',
        })
            .then((data) => {
                resolve(data.data);
            })
            .catch((error) => {
                reject(error.toString());
            });
    });
};

export default downloadCanvasImg;
