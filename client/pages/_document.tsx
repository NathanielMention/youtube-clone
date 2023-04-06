import { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from "@mantine/next";

//custom doc can update tags used to render page. this file only renders on server. no event handlers work on this file
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = createGetInitialProps();
