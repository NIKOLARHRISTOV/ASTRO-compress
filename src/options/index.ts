import type CSS from "./css.js";
import type HTML from "./html.js";
import type IMG from "./img.js";
import type JS from "./js.js";
import type SVG from "./svg.js";

export type filterFn = (file: string) => boolean;

export interface Options {
	// rome-ignore lint:
	[key: string]: any;

	path?: string | string[] | Set<string>;

	exclude?:
		| string
		| RegExp
		| filterFn
		| string[]
		| RegExp[]
		| filterFn[]
		| Set<string>
		| Set<RegExp>
		| Set<filterFn>;

	css?: boolean | CSS;

	html?: boolean | HTML;

	js?: boolean | JS;

	img?: boolean | IMG;

	svg?: boolean | SVG;

	logger?: number;
}

export default (): Options => ({
	path: "./dist/",
	css: {
		clone: false,
		comments: false,
		forceMediaMerge: true,
	},
	html: {
		caseSensitive: true,
		collapseInlineTagWhitespace: false,
		collapseWhitespace: true,
		continueOnParseError: true,
		html5: true,
		includeAutoGeneratedTags: true,
		keepClosingSlash: true,
		minifyCSS: true,
		minifyJS: true,
		minifyURLs: false,
		preventAttributesEscaping: false,
		processConditionalComments: false,
		removeAttributeQuotes: true,
		removeComments: false,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		removeTagWhitespace: false,
		sortAttributes: true,
		sortClassName: true,
		trimCustomFragments: true,
		useShortDoctype: false,
		noNewlinesBeforeTagClose: true,
		quoteCharacter: '"',
	},
	js: {
		ecma: 5,
		enclose: false,
		keep_classnames: false,
		keep_fnames: false,
		ie8: false,
		module: false,
		safari10: false,
		toplevel: false,
	},
	img: {
		avif: {
			chromaSubsampling: "4:4:4",
			effort: 9,
		},
		gif: {
			effort: 10,
		},
		jpeg: {
			chromaSubsampling: "4:4:4",
			mozjpeg: true,
			trellisQuantisation: true,
			overshootDeringing: true,
			optimiseScans: true,
		},
		png: {
			compressionLevel: 9,
			palette: true,
		},
		raw: {},
		tiff: {
			compression: "lzw",
		},
		webp: {
			effort: 6,
		},
	},
	svg: {
		multipass: true,
		js2svg: {
			indent: 0,
			pretty: false,
		},
		plugins: ["preset-default"],
	},
	logger: 2,
});
