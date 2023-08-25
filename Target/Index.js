import{Bytes as c,Files as d,Merge as n,Default as l}from"files-pipe";import{minify as y}from"csso";import{minify as S}from"html-minifier-terser";import p from"sharp";import{optimize as h}from"svgo";import{minify as w}from"terser";import g from"./Library/SharpRead.js";import u from"./Option/Index.js";var R=(o={})=>{for(const r in o)Object.prototype.hasOwnProperty.call(o,r)&&o[r]===!0&&(o[r]=u[r]);const e=n(u,o),f=new Set;if(typeof e.Path<"u"&&(e.Path instanceof Array||e.Path instanceof Set))for(const r of e.Path)f.add(r);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:r})=>{f.size||f.add(r);for(const[s,i]of Object.entries(e))if(i)for(const m of f)await(await(await(await new d(e.Logger).In(m)).By(typeof e.Map=="object"?e.Map[s]:"")).Not(e.Exclude)).Pipe(n(e.Pipe,n(e.Pipe,{Wrote:async t=>{switch(s){case"CSS":return y(t.Buffer.toString(),i).css;case"HTML":return await S(t.Buffer.toString(),i);case"JavaScript":{const{code:a}=await w(t.Buffer.toString(),i);return a||t.Buffer}case"Image":return g(i,t);case"SVG":{const{data:a}=h(t.Buffer.toString(),i);return typeof a<"u"?a:t.Buffer}default:return t.Buffer}},Read:async t=>{switch(s){case"Image":{const{format:a}=await p(t.Input).metadata();return p(t.Input,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:a==="webp"||a==="gif"})}default:return await l.Pipe.Read(t)}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${s} ${t.Files===1?"file":"files"} for ${await c(t.Info.Total)}.`:!1})))}}}};export{R as default};
