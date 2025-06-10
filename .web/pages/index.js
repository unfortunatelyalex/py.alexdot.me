/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import NextLink from "next/link"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Fragment_8be51e65a7ed728fc81e68dcf50cad36 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
Fragment,
{},
((resolvedColorMode === "light") ? (jsx(
Fragment,
{},
jsx(Img_b5967e7491fc22f96b3bb06c47f2b7ee,{},)
,)) : (jsx(
Fragment,
{},
jsx(Img_f6fa6daaa66cfb4fcbdc3ac4c855c397,{},)
,))),)
  )
}

export function Img_f6fa6daaa66cfb4fcbdc3ac4c855c397 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    jsx("img",{className:"h-12 w-12 transition",onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8,src:"/images/white_moon_4096.png"},)

  )
}

        function ComponentMap_85c510a48f6f69884e0c37924bfe5c25 () {
            
  const { resolvedColorMode } = useContext(ColorModeContext)

  
if ("python") {
    
(async () => {
    try {
        const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${"python"}`);
        SyntaxHighlighter.registerLanguage("python", module.default);
    } catch (error) {
        console.error(`Language ${"python"} is not supported for code blocks inside of markdown: `, error);
    }
})();

}


            return (
                ({ ["h1"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h1",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"6",...props},children,))), ["h2"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h2",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"5",...props},children,))), ["h3"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h3",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"4",...props},children,))), ["h4"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h4",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"3",...props},children,))), ["h5"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h5",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"2",...props},children,))), ["h6"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h6",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"1",...props},children,))), ["p"] : (({node, children, ...props}) => (jsx(RadixThemesText,{as:"p",css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),...props},children,))), ["ul"] : (({node, children, ...props}) => (jsx("ul",{css:({ ["listStyleType"] : "disc", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })},children,))), ["ol"] : (({node, children, ...props}) => (jsx("ol",{css:({ ["listStyleType"] : "decimal", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })},children,))), ["li"] : (({node, children, ...props}) => (jsx("li",{css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })},children,))), ["a"] : (({node, children, ...props}) => (jsx(RadixThemesLink,{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#",...props},children,))), ["code"] : (({node, inline, className, children, ...props}) => { const match = (className || '').match(/language-(?<lang>.*)/); let _language = match ? match[1] : '';   if (_language) {     if (!["abap", "abnf", "actionscript", "ada", "agda", "al", "antlr4", "apacheconf", "apex", "apl", "applescript", "aql", "arduino", "arff", "asciidoc", "asm6502", "asmatmel", "aspnet", "autohotkey", "autoit", "avisynth", "avro-idl", "bash", "basic", "batch", "bbcode", "bicep", "birb", "bison", "bnf", "brainfuck", "brightscript", "bro", "bsl", "c", "cfscript", "chaiscript", "cil", "clike", "clojure", "cmake", "cobol", "coffeescript", "concurnas", "coq", "core", "cpp", "crystal", "csharp", "cshtml", "csp", "css", "css-extras", "csv", "cypher", "d", "dart", "dataweave", "dax", "dhall", "diff", "django", "dns-zone-file", "docker", "dot", "ebnf", "editorconfig", "eiffel", "ejs", "elixir", "elm", "erb", "erlang", "etlua", "excel-formula", "factor", "false", "firestore-security-rules", "flow", "fortran", "fsharp", "ftl", "gap", "gcode", "gdscript", "gedcom", "gherkin", "git", "glsl", "gml", "gn", "go", "go-module", "graphql", "groovy", "haml", "handlebars", "haskell", "haxe", "hcl", "hlsl", "hoon", "hpkp", "hsts", "http", "ichigojam", "icon", "icu-message-format", "idris", "iecst", "ignore", "index", "inform7", "ini", "io", "j", "java", "javadoc", "javadoclike", "javascript", "javastacktrace", "jexl", "jolie", "jq", "js-extras", "js-templates", "jsdoc", "json", "json5", "jsonp", "jsstacktrace", "jsx", "julia", "keepalived", "keyman", "kotlin", "kumir", "kusto", "latex", "latte", "less", "lilypond", "liquid", "lisp", "livescript", "llvm", "log", "lolcode", "lua", "magma", "makefile", "markdown", "markup", "markup-templating", "matlab", "maxscript", "mel", "mermaid", "mizar", "mongodb", "monkey", "moonscript", "n1ql", "n4js", "nand2tetris-hdl", "naniscript", "nasm", "neon", "nevod", "nginx", "nim", "nix", "nsis", "objectivec", "ocaml", "opencl", "openqasm", "oz", "parigp", "parser", "pascal", "pascaligo", "pcaxis", "peoplecode", "perl", "php", "php-extras", "phpdoc", "plsql", "powerquery", "powershell", "processing", "prolog", "promql", "properties", "protobuf", "psl", "pug", "puppet", "pure", "purebasic", "purescript", "python", "q", "qml", "qore", "qsharp", "r", "racket", "reason", "regex", "rego", "renpy", "rest", "rip", "roboconf", "robotframework", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shell-session", "smali", "smalltalk", "smarty", "sml", "solidity", "solution-file", "soy", "sparql", "splunk-spl", "sqf", "sql", "squirrel", "stan", "stylus", "swift", "systemd", "t4-cs", "t4-templating", "t4-vb", "tap", "tcl", "textile", "toml", "tremor", "tsx", "tt2", "turtle", "twig", "typescript", "typoscript", "unrealscript", "uorazor", "uri", "v", "vala", "vbnet", "velocity", "verilog", "vhdl", "vim", "visual-basic", "warpscript", "wasm", "web-idl", "wiki", "wolfram", "wren", "xeora", "xml-doc", "xojo", "xquery", "yaml", "yang", "zig"].includes(_language)) {         console.warn(`Language \`${_language}\` is not supported for code blocks inside of markdown.`);         _language = '';     } else {          (async () => {     try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${_language}`);         SyntaxHighlighter.registerLanguage(_language, module.default);     } catch (error) {         console.error(`Language ${_language} is not supported for code blocks inside of markdown: `, error);     } })();      }   }  ;             return inline ? (                 jsx(RadixThemesCode,{...props},children,)             ) : (                 jsx(SyntaxHighlighter,{children:((Array.isArray(children)) ? children.join("\n") : children),css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),customStyle:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),language:_language,style:((resolvedColorMode === "light") ? oneLight : oneDark),wrapLongLines:true,...props},)             );         }) })
            )
        }
        

export function Img_b5967e7491fc22f96b3bb06c47f2b7ee () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    jsx("img",{className:"h-12 w-12 transition",onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8,src:"/images/black_sun_4096.png"},)

  )
}

export function Flex_51eeab60cb7af1d2b01a4bcfcfb36f5c () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
RadixThemesFlex,
{className:((resolvedColorMode === "light") ? "static w-screen h-screen bg-slate-100 transition" : "static w-screen h-screen dark-100 transition")},
jsx(
RadixThemesBox,
{className:"absolute top-4 left-0 mx-4 flex font-extrabold w-fit items-stretch"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesHeading,
{className:"select-none mx-4",css:({ ["fontFamily"] : "canterbury", ["--default-font-family"] : "canterbury", ["fontSize"] : "4.5em" })},
"a"
,),jsx(
RadixThemesHeading,
{className:"select-none text-2xl underline",css:({ ["fontFamily"] : "IBM Plex Mono", ["--default-font-family"] : "IBM Plex Mono" })},
"project alex."
,),),),jsx(
RadixThemesBox,
{className:"fixed top-0 right-0 mx-4 my-4 z-50 transition"},
jsx(Fragment_8be51e65a7ed728fc81e68dcf50cad36,{},)
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",className:"fixed bottom-5 right-5 opacity-50 text-xs"},
"made with \ud83d\udc9b by alex."
,),),jsx(
RadixThemesContainer,
{className:"relative transition",css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesFlex,
{className:"items-center justify-center"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack absolute inset-y-1/2 items-center justify-center text-center text-xs sm:text-base",direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesText,
{align:"center",as:"p",className:"text-4xl sm:text-5xl",css:({ ["fontWeight"] : "bold" })},
"i'm"
,),jsx(
RadixThemesText,
{align:"center",as:"p",className:"underline text-4xl sm:text-5xl",css:({ ["fontWeight"] : "bold" })},
"alex."
,),),jsx(
RadixThemesBox,
{css:({ ["lineHeight"] : "0.2em" })},
jsx(
ReactMarkdown,
{className:"py-1",components:ComponentMap_85c510a48f6f69884e0c37924bfe5c25(),rehypePlugins:[rehypeKatex, rehypeRaw],remarkPlugins:[remarkMath, remarkGfm, remarkUnwrapImages]},
"I'm a 22 year old **IT Junior Procedure Administrator** in Germany."
,),jsx(
ReactMarkdown,
{className:"py-1",components:ComponentMap_85c510a48f6f69884e0c37924bfe5c25(),rehypePlugins:[rehypeKatex, rehypeRaw],remarkPlugins:[remarkMath, remarkGfm, remarkUnwrapImages]},
"I'm learning Python as a hobby and love tinkering around with it."
,),jsx(
ReactMarkdown,
{className:"py-1",components:ComponentMap_85c510a48f6f69884e0c37924bfe5c25(),rehypePlugins:[rehypeKatex, rehypeRaw],remarkPlugins:[remarkMath, remarkGfm, remarkUnwrapImages]},
"Contact me, if you have any questions or just want to chat"
,),jsx(
RadixThemesText,
{as:"p",className:"py-1"},
"Email me: "
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "underline", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
NextLink,
{href:"mailto:alex@alexdot.me",passHref:true},
"alex@alexdot.me"
,),),),),),),),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(Flex_51eeab60cb7af1d2b01a4bcfcfb36f5c,{},)
,jsx(
NextHead,
{},
jsx(
"title",
{},
"WORK IN PROGRESS | project alex."
,),jsx("meta",{content:"this website is far from done",name:"description"},)
,jsx("meta",{content:"https://cdn.discordapp.com/attachments/879788833196081192/1139677702958362665/dfnukjz-0f4dc473-62cc-473c-8ee8-e1a01f5787f6.png",property:"og:image"},)
,),)
  )
}
