import * as React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {
  static getInitialProps ({ renderPage, ...args }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    const isAmp = /^\/amp/.test(args.req.url)

    return { html, head, errorHtml, chunks, styles, isAmp }
  }

  render () {
    const { html, isAmp } = this.props
    return (
      <React.Fragment>
        {isAmp ? (
          <html amp="">
            <Head>
              <meta charSet="utf-8" />
              <link rel="canonical" href="/" />
              <meta
                name="viewport"
                content="width=device-width,minimum-scale=1"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto"
              />
              <style amp-boilerplate="">
                {
                  'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'
                }
              </style>
              <noscript>
                <style amp-boilerplate="">
                  {
                    'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}'
                  }
                </style>
              </noscript>
              <style amp-custom="">
                {
                  'body {font-family: Roboto, sans-serif; padding: 30px; color: #444;} h1 {margin-bottom: 5px;} .byline { color: #aaa; margin-bottom: 25px; } p {font-size: 18px; line-height: 30px; margin-top: 30px;} .caption {color: #ccc; margin-top: 0; font-size: 14px; text-align: center;}'
                }
              </style>
              <script async src="https://cdn.ampproject.org/v0.js" />
            </Head>
            <body>
              <div id="__next" dangerouslySetInnerHTML={{ __html: html }} />
              <div id="modal" />
            </body>
          </html>
        ) : (
          <html lang="ko">
            <Head>
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
              />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="SITE_NAME" />
              <meta property="og:title" content="SITE_TITLE" />
              <meta property="og:description" content="SITE_DESCRIPTION" />
              <meta property="og:image" content="SITE_IMAGE" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="SITE_NAME" />
              <meta name="twitter:title" content="SITE_TITLE" />
              <meta name="twitter:description" content="SITE_DESCRIPTION" />
              <meta property="twitter:image" content="SITE_IMAGE" />

              <link rel="stylesheet" href="/static/css/normalize.css" />
              <link rel="stylesheet" href="/static/css/main.css" />
              <link rel="shortcut icon" href="/static/img/favicon.ico" />

              <noscript>
                <link rel="stylesheet" href="assets/css/noscript.css" />
              </noscript>
            </Head>
            <body>
              <Main />
              {/* here we will mount our modal portal */}
              <div id="modal" />
              <NextScript />
            </body>
          </html>
        )}
      </React.Fragment>
    )
  }
}
