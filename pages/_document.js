import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import vars from '../utils/vars'
const colors = vars.colors

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage()
    const styles = flush()
    return { html, head, styles }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <style>
            {`
           :root {
            --bg: ${colors.bg};
            --green: ${colors.green};
            --yellow: ${colors.yellow};
            --red: ${colors.red};
            --blue: ${colors.blue};
            --inputColor: ${colors.inputColor};
            --itemColor: ${colors.itemColor};
            --fontColor: ${colors.fontColor};

            --bigFontSize: ${vars.bigFontSize};
            --headingFontSize: ${vars.headingFontSize};
            --itemFontSize: ${vars.itemFontSize};

            --font-size: 18px;
          }

          *, *::after, *::before {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--fontColor);
            font-family: Helvetica, Arial, sans-serif;
            font-weight: lighter;
            overflow-y: scroll;
          }
          #app {
            position: relative;
            margin: 40px auto;
            min-width: 60vw;
            max-width: 90vw;
          }

          ::-webkit-scrollbar {
            background-color: @bg;
            width: 1em;
          }

          ::-webkit-scrollbar-thumb:window-inactive,
          ::-webkit-scrollbar-thumb {
            background: @input-color;
            border: 3px solid @bg;
            border-radius: 0.5em;
          }
        `}
          </style>
          <title>Todometer-web</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" dangerouslySetInnerHTML={loadScript} />
        </body>
      </html>
    )
  }
}
