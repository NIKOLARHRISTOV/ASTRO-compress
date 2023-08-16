import { minify as y } from "csso";
import { Files as c } from "files-pipe";
import d from "files-pipe/Target/Library/Bytes.js";
import n from "files-pipe/Target/Library/Merge.js";
import l from "files-pipe/Target/Option/Index.js";
import { minify as S } from "html-minifier-terser";
import p from "sharp";
import { optimize as h } from "svgo";
import { minify as g } from "terser";
import w from "./Library/SharpRead.js";
import m from "./Option/Index.js";
var $=(i={})=>{for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&i[r]===!0&&(i[r]=m[r]);const e=n(m,i),f=new Set;if(typeof e.Path<"u"&&(e.Path instanceof Array||e.Path instanceof Set))for(const r of e.Path)f.add(r);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:r})=>{f.size||f.add(r);for(const[s,o]of Object.entries(e))if(o)for(const u of f)await(await(await(await new c(e.Logger).In(u)).By(typeof e.Map=="object"?e.Map[s]:"")).Not(e.Exclude)).Pipe(n(e.Pipe,n(e.Pipe,{Wrote:async t=>{switch(s){case"CSS":return y(t.Buffer.toString(),o).css;case"HTML":return await S(t.Buffer.toString(),o);case"JavaScript":{const{code:a}=await g(t.Buffer.toString(),o);return a||t.Buffer}case"Image":return w(o,t);case"SVG":{const{data:a}=h(t.Buffer.toString(),o);return typeof a<"u"?a:t.Buffer}default:return t.Buffer}},Read:async t=>{switch(s){case"Image":{const{format:a}=await p(t.Input).metadata();return p(t.Input,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:a==="webp"||a==="gif"})}default:return await l.Pipe.Read(t)}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${s} ${t.Files===1?"file":"files"} for ${await d(t.Info.Total)}.`:!1})))}}}};export { $ as default };

