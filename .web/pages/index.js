/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Box as RadixThemesBox, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
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
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import NextHead from "next/head"



export function Flex_8bf6e8173141858ba27ac5e71a75fe06 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesFlex className={isTrue(((resolvedColorMode) === (`light`))) ? `static w-screen h-screen bg-white transition` : `static w-screen h-screen bg-black transition`}>
  <RadixThemesBox className={`absolute top-4 left-0 mx-4 flex font-extrabold w-fit items-stretch`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesHeading className={`select-none mx-4`} css={{"fontFamily": "canterbury", "--default-font-family": "canterbury", "fontSize": "4.5em"}}>
  {`a`}
</RadixThemesHeading>
  <RadixThemesHeading className={`select-none text-2xl underline`} css={{"fontFamily": "IBM Plex Mono", "--default-font-family": "IBM Plex Mono"}}>
  {`project alex.`}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox className={`fixed top-0 right-0 mx-4 my-4 z-50 transition`}>
  <Fragment_0207a03d333d2449780443952fc84091/>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesText as={`p`} className={`fixed bottom-5 right-5 opacity-50 text-xs`}>
  {`made with 💛 by alex.`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesContainer className={`relative transition`} css={{"padding": "16px"}} size={`3`}>
  <RadixThemesFlex className={`items-center justify-center`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack absolute inset-y-1/2 items-center justify-center text-center text-xs sm:text-base`} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText align={`center`} as={`p`} className={`text-4xl sm:text-5xl`} css={{"fontWeight": "bold"}}>
  {`i'm`}
</RadixThemesText>
  <RadixThemesText align={`center`} as={`p`} className={`underline text-4xl sm:text-5xl`} css={{"fontWeight": "bold"}}>
  {`alex.`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesBox css={{"lineHeight": "0.2em"}}>
  <ReactMarkdown className={`py-1`} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_302f7bd33e870f030bcd6dc2ddec3e08()}>
  {`I'm a 21 year old **IT Junior Procedure Administrator** in Germany.`}
</ReactMarkdown>
  <ReactMarkdown className={`py-1`} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_302f7bd33e870f030bcd6dc2ddec3e08()}>
  {`I'm learning Python as a hobby and love tinkering around with it.`}
</ReactMarkdown>
  <ReactMarkdown className={`py-1`} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_302f7bd33e870f030bcd6dc2ddec3e08()}>
  {`Contact me, if you have any questions or just want to chat`}
</ReactMarkdown>
  <RadixThemesText as={`p`} className={`py-1`}>
  {`Email me: `}
  <RadixThemesLink asChild={true} css={{"textDecoration": "underline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`mailto:alex@alexdot.me`} passHref={true}>
  {`alex@alexdot.me`}
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

        function ComponentMap_302f7bd33e870f030bcd6dc2ddec3e08 () {
            const { resolvedColorMode } = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <RadixThemesHeading as={`h1`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`6`} {...props}>  {children}</RadixThemesHeading>, "h2": ({node, children, ...props}) => <RadixThemesHeading as={`h2`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`5`} {...props}>  {children}</RadixThemesHeading>, "h3": ({node, children, ...props}) => <RadixThemesHeading as={`h3`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`4`} {...props}>  {children}</RadixThemesHeading>, "h4": ({node, children, ...props}) => <RadixThemesHeading as={`h4`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`3`} {...props}>  {children}</RadixThemesHeading>, "h5": ({node, children, ...props}) => <RadixThemesHeading as={`h5`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`2`} {...props}>  {children}</RadixThemesHeading>, "h6": ({node, children, ...props}) => <RadixThemesHeading as={`h6`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`1`} {...props}>  {children}</RadixThemesHeading>, "p": ({node, children, ...props}) => <RadixThemesText as={`p`} css={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>  {children}</RadixThemesText>, "ul": ({node, children, ...props}) => <ul css={{"listStyleType": "disc", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "listStylePosition": "outside", "direction": "column"}}>  {children}</ul>, "ol": ({node, children, ...props}) => <ol css={{"listStyleType": "decimal", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "listStylePosition": "outside", "direction": "column"}}>  {children}</ol>, "li": ({node, children, ...props}) => <li css={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>  {children}</li>, "a": ({node, children, ...props}) => <RadixThemesLink css={{"&:hover": {"color": "var(--accent-8)"}}} {...props}>  {children}</RadixThemesLink>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode {...props}>  {children}</RadixThemesCode>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} children={children} {...props}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} children={children} {...props}/>}
            )
        }
        

export function Fragment_0207a03d333d2449780443952fc84091 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <img className={`h-12 w-12 transition`} onClick={toggleColorMode} src={`/images/black_sun_4096.png`}/>
</Fragment>
) : (
  <Fragment>
  <img className={`h-12 w-12 transition`} onClick={toggleColorMode} src={`/images/white_moon_4096.png`}/>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Flex_8bf6e8173141858ba27ac5e71a75fe06/>
  <NextHead>
  <title>
  {`WORK IN PROGRESS | project alex.`}
</title>
  <meta content={`this website is far from done`} name={`description`}/>
  <meta content={`https://cdn.discordapp.com/attachments/879788833196081192/1139677702958362665/dfnukjz-0f4dc473-62cc-473c-8ee8-e1a01f5787f6.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
