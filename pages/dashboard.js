// @flow

import React from 'react'
import firebase from 'firebase'
import { Layout } from '../components'

type Props = {}

export default class Dashboard extends React.Component<Props, null> {
  static async getInitialProps ({ req, query }) {
    const user = req && req.session ? req.session.decodedToken : null
    return { user }
  }

  state = {
    user: this.props.user
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  handleLogout = () => {
    firebase.auth().signOut()
  }

  render () {
    const { user } = this.props
    return (
      <Layout>
        <h1>Dashboard</h1>

        {user ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
      </Layout>
    )
  }
}
