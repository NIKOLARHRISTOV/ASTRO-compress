import type { IMG } from "../options/img.js";
import type { optionExecutionsFile } from "files-pipeline/dist/options/index.js";
import type { Sharp } from "sharp";
export interface sharpBuffer extends Sharp {
    [key: string]: any;
}
export interface currentSharp extends Omit<optionExecutionsFile, "buffer"> {
    buffer: sharpBuffer;
}
declare const _default: (options: IMG, current: currentSharp) => Promise<any>;
export default _default;
