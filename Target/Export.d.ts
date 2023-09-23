import type { Type } from "./Option/Index.js";
import type { AstroIntegration } from "astro";
export declare const Default: Type;
export declare const CSSO: typeof import("csso").minify;
export declare const Bytes: (Bytes: number, Decimals?: number | undefined) => Promise<string>, Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeLeafURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
}>, Readonly<{
    key: PropertyKey;
    parents: readonly Readonly<Record<PropertyKey, unknown>>[];
}>>, _Default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("files-pipe").File) => Promise<string>;
        Wrote: (On: import("files-pipe").File) => Promise<import("files-pipe").Buffer>;
        Passed: (On: import("files-pipe").File) => Promise<boolean>;
        Failed: (On: import("files-pipe").File) => Promise<string>;
        Accomplished: (On: import("files-pipe").File) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").Type) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").Type) => Promise<import("files-pipe/Target/Interface/Plan.js").Type>;
    };
};
export declare const HTMLMinifierTerser: typeof import("html-minifier-terser").minify;
export declare const sharp: typeof import("sharp");
declare const _default: (_Option?: Type) => AstroIntegration;
export default _default;
