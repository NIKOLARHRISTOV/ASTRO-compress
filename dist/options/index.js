import t from "files-pipeline/dist/lib/deepmerge.js";
import i from "files-pipeline/dist/options/index.js";
import o from "../lib/format-bytes.js";
import s from "./css.js";
import f from "./html.js";
import r from "./img.js";
import m from "./js.js";
import a from "./map.js";
import p from "./svg.js";
var B=t(i,{css:s,html:f,js:m,img:r,svg:p,map:a,pipeline:{failed:async e=>`Error: Cannot compress file ${e.inputPath}!`,passed:async e=>e.fileSizeBefore>Buffer.byteLength(e.buffer.toString()),accomplished:async e=>`Compressed ${e.inputPath} for ${await o(e.fileSizeBefore-e.fileSizeAfter)} (${((e.fileSizeBefore-e.fileSizeAfter)/e.fileSizeBefore*100).toFixed(2)}% reduction) in ${e.outputPath}.`,changed:async e=>(e.info.total=(e.info.total?e.info.total:0)+(e.current.fileSizeBefore-e.current.fileSizeAfter),e)}});export { B as default };

