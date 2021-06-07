import * as path from "path";
import { cp } from "./ls/main";
import { walk } from "./ls/walk";

const pcSrc = "/Users/zsy/Documents/zsytssk/job/website/src/containers/Match";
const pcDist =
  "/Users/zsy/Documents/zsytssk/job/dapp-website/src/containers/Match";
const h5Src =
  "/Users/zsy/Documents/zsytssk/job/website-wap/src/containers/Match";
const h5Dist =
  "/Users/zsy/Documents/zsytssk/job/dapp-website-wap/src/containers/Match";

async function main() {
  // // pc
  // const pcFiles = await walk(pcSrc, { ignore: ["Contract", "Layout.tsx"] });
  // for (const file of pcFiles) {
  //   if (file.indexOf(".less") !== -1) {
  //     continue;
  //   }

  //   const relPath = path.relative(pcSrc, file);
  //   const distFile = path.resolve(pcDist, relPath);
  //   await cp(file, distFile);
  // }

  // h5
  const h5Files = await walk(h5Src);
  for (const file of h5Files) {
    if (file.indexOf(".less") !== -1) {
      continue;
    }

    const relPath = path.relative(h5Src, file);
    const distFile = path.resolve(h5Dist, relPath);
    await cp(file, distFile);
  }
}

main();
