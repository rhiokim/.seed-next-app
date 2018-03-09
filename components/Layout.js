// @flow
import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import firebase from 'firebase'
import 'isomorphic-fetch'
import clientCredentials from '../credentials/client'

import { Nav, Footer, Copyright } from './'

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

type Props = {
  children: any
}

export default class Layout extends React.Component<Props, {}> {
  componentDidMount () {
    firebase.initializeApp(clientCredentials)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // eslint-disable-next-line no-undef
        return user
          .getIdToken()
          .then(token => {
            // eslint-disable-next-line no-undef
            return fetch('/api/login', {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'same-origin',
              body: JSON.stringify({ token })
            })
          })
          .then(res => {})
      } else {
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin'
        }).then(() => {})
      }
    })
  }

  render () {
    const { children } = this.props
    return (
      <div className="container-fluid">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />
        </Head>
        <div id="wrapper">
          {/* Header */}
          <header id="header">
            <a href="index.html" className="logo">
              Massively
            </a>
          </header>

          {/* Nav */}
          <Nav />

          {/* Main */}
          <div id="main">
            <main>{children}</main>
          </div>

          {/* Footer */}
          <Footer />

          {/* Copyright */}
          <Copyright />
        </div>
      </div>
    )
  }
}
