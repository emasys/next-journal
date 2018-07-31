import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginTop: '1.45rem',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h6 style={{ margin: 0 }}>
        Made by{' '}
        <a
          target="_blank"
          href="https://twitter.com/emasys_nd"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          eMASYS
        </a>
      </h6>
    </div>
  </div>
)

export default Footer
