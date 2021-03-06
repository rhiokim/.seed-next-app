// @flow
import React from 'react'
import fetch from 'isomorphic-fetch'
import { Layout } from '../components'

type Props = {
  post: any,
  author: any
}

// const Post = ({ post, author }: Props) => (
export default class extends React.Component<Props> {
  static getInitialProps = async ({ query: { id } }) => {
    const resA = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await resA.json()

    const resB = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    )
    const author = await resB.json()

    return { post, author }
  }

  render () {
    const { author, post } = this.props
    return (
      <Layout>
        <style jsx>{`
          small {
            color: #aaa;
            font-size: 0.7em;
          }
          .author-site {
            float: right;
          }
        `}</style>
        <div>
          <span>
            author: {author.name} <small>&lt;{author.email}&gt;</small>
          </span>
          <span className="author-site">
            website:{' '}
            <a href={`//${author.website}`} target="_blank">
              {author.website}
            </a>
          </span>
        </div>
        <h3>{post.title}</h3>
        <article>{post.body}</article>
      </Layout>
    )
  }
}
