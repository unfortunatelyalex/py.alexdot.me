/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import NextLink from "next/link"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import NextHead from "next/head"



export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Flex_e941741e1460f5ad369b4933e3907b07 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesFlex className={((resolvedColorMode === "light") ? "static w-screen h-screen bg-slate-100 transition" : "static w-screen h-screen bg-gray-900 transition")}>
  <RadixThemesBox className={"absolute top-4 left-0 mx-4 flex font-extrabold w-fit items-stretch"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <RadixThemesHeading className={"select-none mx-4"} css={({ ["fontFamily"] : "canterbury", ["--default-font-family"] : "canterbury", ["fontSize"] : "4.5em" })}>
  {"a"}
</RadixThemesHeading>
  <RadixThemesHeading className={"select-none text-2xl underline"} css={({ ["fontFamily"] : "IBM Plex Mono", ["--default-font-family"] : "IBM Plex Mono" })}>
  {"project alex."}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox className={"fixed top-0 right-0 mx-4 my-4 z-50 transition"}>
  <Fragment_eb5c60a6299c139bdb6b649d45fe7588/>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesText as={"p"} className={"fixed bottom-5 right-5 opacity-50 text-xs"}>
  {"made with \ud83d\udc9b by alex."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesContainer className={"relative transition"} css={({ ["padding"] : "16px" })} size={"3"}>
  <RadixThemesFlex className={"items-center justify-center"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack absolute inset-y-1/2 items-center justify-center text-center text-xs sm:text-base"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <RadixThemesText align={"center"} as={"p"} className={"text-4xl sm:text-5xl"} css={({ ["fontWeight"] : "bold" })}>
  {"i'm"}
</RadixThemesText>
  <RadixThemesText align={"center"} as={"p"} className={"underline text-4xl sm:text-5xl"} css={({ ["fontWeight"] : "bold" })}>
  {"alex."}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesBox css={({ ["lineHeight"] : "0.2em" })}>
  <ReactMarkdown className={"py-1"} components={ComponentMap_b05fc871f4c07d9afa8e52fc86215f3f()} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]}>
  {"I'm a 21 year old **IT Junior Procedure Administrator** in Germany."}
</ReactMarkdown>
  <ReactMarkdown className={"py-1"} components={ComponentMap_b05fc871f4c07d9afa8e52fc86215f3f()} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]}>
  {"I'm learning Python as a hobby and love tinkering around with it."}
</ReactMarkdown>
  <ReactMarkdown className={"py-1"} components={ComponentMap_b05fc871f4c07d9afa8e52fc86215f3f()} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]}>
  {"Contact me, if you have any questions or just want to chat"}
</ReactMarkdown>
  <RadixThemesText as={"p"} className={"py-1"}>
  {"Email me: "}
  <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "underline", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>
  <NextLink href={"mailto:alex@alexdot.me"} passHref={true}>
  {"alex@alexdot.me"}
</NextLink>
</RadixThemesLink>
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesContainer>
</RadixThemesFlex>
  )
}

export function Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_e521b13e556da291bcec5187a783ea81 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((connectErrors.length > 0)) ? (
  <Fragment>
  <LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_eb5c60a6299c139bdb6b649d45fe7588 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((resolvedColorMode === "light")) ? (
  <Fragment>
  <img className={"h-12 w-12 transition"} onClick={toggleColorMode} src={"/images/black_sun_4096.png"}/>
</Fragment>
) : (
  <Fragment>
  <img className={"h-12 w-12 transition"} onClick={toggleColorMode} src={"/images/white_moon_4096.png"}/>
</Fragment>
)}
</Fragment>
  )
}

        function ComponentMap_b05fc871f4c07d9afa8e52fc86215f3f () {
            const { resolvedColorMode } = useContext(ColorModeContext)
            return (
                ({ ["h1"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h1"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"6"} {...props}>  {children}</RadixThemesHeading>)), ["h2"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h2"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"5"} {...props}>  {children}</RadixThemesHeading>)), ["h3"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h3"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"4"} {...props}>  {children}</RadixThemesHeading>)), ["h4"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h4"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"3"} {...props}>  {children}</RadixThemesHeading>)), ["h5"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h5"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"2"} {...props}>  {children}</RadixThemesHeading>)), ["h6"] : (({node, children, ...props}) => (<RadixThemesHeading as={"h6"} css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })} size={"1"} {...props}>  {children}</RadixThemesHeading>)), ["p"] : (({node, children, ...props}) => (<RadixThemesText as={"p"} css={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} {...props}>  {children}</RadixThemesText>)), ["ul"] : (({node, children, ...props}) => (<ul css={({ ["listStyleType"] : "disc", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })}>  {children}</ul>)), ["ol"] : (({node, children, ...props}) => (<ol css={({ ["listStyleType"] : "decimal", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })}>  {children}</ol>)), ["li"] : (({node, children, ...props}) => (<li css={({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })}>  {children}</li>)), ["a"] : (({node, children, ...props}) => (<RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} {...props}>  {children}</RadixThemesLink>)), ["code"] : (({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode {...props}>  {children}</RadixThemesCode>     ) : (         <SyntaxHighlighter children={children} css={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} customStyle={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} language={language} style={((resolvedColorMode === "light") ? oneLight : oneDark)} wrapLongLines={true} {...props}/>     );       }), ["codeblock"] : (({node, children, ...props}) => (<SyntaxHighlighter children={children} css={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} customStyle={({ ["marginTop"] : "1em", ["marginBottom"] : "1em" })} language={"python"} style={((resolvedColorMode === "light") ? oneLight : oneDark)} wrapLongLines={true} {...props}/>)) })
            )
        }
        

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_24a2e81d0c5d3cb5b5f786fdef44e514/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Flex_e941741e1460f5ad369b4933e3907b07/>
  <NextHead>
  <title>
  {"WORK IN PROGRESS | project alex."}
</title>
  <meta content={"this website is far from done"} name={"description"}/>
  <meta content={"https://cdn.discordapp.com/attachments/879788833196081192/1139677702958362665/dfnukjz-0f4dc473-62cc-473c-8ee8-e1a01f5787f6.png"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
