import QRCodeComponent from 'qrcode.react';
import React, {
    useCallback,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

import downloadCanvasImg from '@/utils/downloadCanvasImg';

import { xijiadeLogo } from '../../config';
import { sleep } from '../../utils';

export type DownloadItem = {
    name: string;
    id: string;
    value: string;
    table?: string;
};

export type DownloadFn = (
    name: string,
    list: DownloadItem[],
) => Promise<boolean>;

type Props = {
    optRef: React.MutableRefObject<
        | {
              download: DownloadFn;
          }
        | undefined
    >;
};
export function DownloadQrCode({ optRef }: Props) {
    const [downloadList, setDownloadList] = useState<DownloadItem[]>([]);
    const boxRef = useRef<HTMLDivElement>(null);

    const downloadQrCode = useCallback(async (name: string) => {
        const list = (boxRef.current?.querySelectorAll(`canvas`) ||
            []) as HTMLCanvasElement[];
        if (!list?.length) {
            return false;
        }
        return downloadCanvasImg(name, list);
    }, []);

    useImperativeHandle(
        optRef,
        () => {
            return {
                download: async (name: string, list: DownloadItem[]) => {
                    setDownloadList(list);
                    let timeout = 0.3;
                    if (list.length > 120) {
                        timeout = 1.2;
                    }
                    await sleep(timeout);

                    return downloadQrCode(name);
                },
            };
        },
        [downloadQrCode],
    );

    return (
        <div ref={boxRef} style={{ display: 'none' }}>
            {downloadList.map((item) => {
                return (
                    <QRCodeComponent
                        key={item.id}
                        value={item.value}
                        renderAs="canvas"
                        size={400}
                        data-name={item.name}
                        includeMargin={true}
                        level="H"
                        imageSettings={{
                            width: 40,
                            height: 40,
                            excavate: false,
                            src: xijiadeLogo,
                        }}
                    />
                );
            })}
        </div>
    );
}
