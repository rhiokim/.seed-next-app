// @flow
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <Link href="/">
            <a>This is Massively</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Generic Page</a>
          </Link>
        </li>
        <li>
          <Link href="/example">
            <a>example</a>
          </Link>
        </li>
        <li>
          <Link href="/elements">
            <a>Elements Reference</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <Link prefetch href="/a">
            <a className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portal">
            <a
              onMouseEnter={() => {
                Router.prefetch('/portal')
                console.log('prefetching /portal!')
              }}
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </Link>
        </li>
        <li>
          <a href="/albums" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
