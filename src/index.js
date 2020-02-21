import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const defaultTheme = {
  bg: '#ffffff',
  fgBody: '#2d3748',
  fgHeadings: '#000000',

  hrColor: 'rgba(0, 0, 0, 0.07)',

  linkColor: '#8a4baf',

  preBg: 'rgba(0, 0, 0, 0.04)',
  preColor: '#2d3748',

  inlineCodeBg: 'rgba(0, 0, 0, 0.04)',
  inlineCodeColor: 'hsl(0, 79 %, 63 %)',

  quoteBg: '#ffffff',
  quoteBorder: '#8a4baf',
  quoteColor: '#6a727c',

  fontFamMain: 'space-grotesk, sans-serif',
  fontFamMono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New" monospace',
  lineHtMain: '1.5',
  lineHtMono: '1'
}

export default class Grotesk extends Component {
  static propTypes = {
    theme: PropTypes.object,
    fluid: PropTypes.bool,
    children: PropTypes.element
  }

  static defaultProps = {
    theme: defaultTheme,
    fluid: true
  }

  render() {
    const { theme, fluid, children } = this.props

    Object.keys(defaultTheme).forEach(key => {
      if (!theme.hasOwnProperty(key)) {
        theme[key] = defaultTheme[key]
      }
    })

    const Container = styled.div`
    background: ${theme.bg};

    width: 100%;
    height: 100%;
    font-family: ${theme.fontFamMain};
    line-height: ${theme.lineHtMain};

    // Type Scale
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.7411rem;
    }

    h3 {
      font-size: 1.5157rem;
    }

    h4 {
      font-size: 1.3195rem;
    }

    h5 {
      font-size: 1.1487rem;
    }

    h6 {
      font-size: 1rem;
    }

    p,
    a,
    ul,
    ol,
    li {
      font-size: 1rem;
    }

    blockquote,
    q,
    code,
    kbd,
    mark {
      font-size: 0.8rem;
    }

    blockquote cite,
    q cite {
      font-size: 0.7rem;
    }

    // Text Styling
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.fgHeadings};
    }

    p,
    ul,
    ol,
    li,
    blockquote,
    q {
      color: ${theme.fgBody};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    blockquote,
    q,
    hr {
      margin: 1rem 0;
    }

    ul,
    ol {
      margin: 0.5rem 1.5rem;
    }

    li {
      margin: 0.2rem 0;
    }

    pre {
      background-color: ${theme.preBg};
      overflow: auto;
      padding: 0 2rem;
      code {
        background: none;
        color: ${theme.preColor};
        padding: 0;
      }
    }

    code {
      background-color: ${theme.inlineCodeBg};
      color: ${theme.inlineCodeColor};
      padding: 0.2rem;
      border-radius: 0.2rem;
    }

    mark {
      padding: 0.2rem;
    }

    hr {
      height: 1px;
      background-color: ${theme.hrColor};
      border: none;
    }

    a {
      color: ${theme.linkColor};
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    blockquote {
      background-color: ${theme.quoteBg};
      color: ${theme.quoteColor};
      border-left: 0.4em solid ${theme.quoteBorder};
      padding: 0.4rem 0;
      padding-left: 1.5rem;
      font-style: italic;
      a {
        font-size: inherit;
      }
    }

    footer {
      width: 100%;
      padding: 0.8rem;
      border-top: 1px solid ${theme.hrColor};
      text-align: center;
      p,
      a {
        font-size: 0.8rem;
      }
    }
    `

    return (
      <Container>
        <Global
          styles={css`
            html,
            body {
              width: 100%;
              height: 100%;
              background: ${theme.bg};
            }

            ${fluid ? ':root {font-size: calc(0.8rem + 0.5vw);}' : ''}
          `}
        />
        {children}
      </Container>
    )
  }
}
