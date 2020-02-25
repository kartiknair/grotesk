import React, { Component } from 'react'
import Grotesk from 'grotesk'

import "./app.css"

const lightTheme = {
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
  fontFamMain: 'space-grotesk, sans-serif'
}

const darkTheme = {
  bg: '#131217',
  fgBody: 'rgba(255, 255, 255, 0.7)',
  fgHeadings: '#e6e5e9',

  hrColor: 'rgba(255, 255, 255, 0.2)',

  linkColor: '#b17acc',

  preBg: '#1b191f',
  preColor: 'rgba(255, 255, 255, 0.7)',

  inlineCodeBg: '#1b191f',
  inlineCodeColor: '#ef6b6b',

  quoteBg: '#131217',
  quoteBorder: '#b17acc',
  quoteColor: '#6a727c',
  fontFamMain: 'space-grotesk, sans-serif'
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      theme: true
    }

    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light")
    } else {
      if (localStorage.getItem("theme") === "light") {
        this.state = { theme: true }
      } else {
        this.state = { theme: false }
      }
    }
  }

  toggle() {
    this.setState(prevState => ({
      theme: !prevState.theme
    }), () => {
      localStorage.setItem("theme", this.state.theme ? "light" : "dark")
    });
  }

  render() {
    return (
      <Grotesk theme={this.state.theme ? lightTheme : darkTheme}>
        <div>
          <div className="parent">
            <header>
              <h1>grotesk</h1>
              <div className={this.state.theme ? "cont" : "cont dark"} onClick={this.toggle}>
                <div className="switch"></div>
              </div>
            </header>
            <hr />
            <p>grotesk is a css library (and <a href="https://github.com/kartiknair/grotesk-css">React Component</a>) that makes web typography simple.
            It offers a simple start of basic styles targetting rich text elements that use semantic HTML, and also (optionally) uses
            fluid typography. Download it using <code>npm i grotesk</code> in your react app and use it directly by wrapping your content in a <code>&lt;Grotesk&gt;</code> component.
            To customize you can pass a theme object as prop to the component for examples and documentation see <a href="https://github.com/kartiknair/grotesk-css">GitHub</a>.
            Scroll down to see how grotesk looks in action:</p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <hr />
            <p>
              This are a few inline styles. For example this is <strong>Bold</strong>,
              this is <em>Italic</em> and this is a <a href="https://example.com">Link</a>.
            </p>
            <p>
              How about some more inline styles, here is <mark>highlighted text</mark> and here is some <del>strikethrough text</del> (did you know the html tag for strikethrough is <code>&lt;del&gt;&lt;/del&gt;</code>)
            </p>
            <hr />
            <p>You can showcase your code using some code snippets:</p>
            <pre>
              <code>
                {
                  `
internic = vpnSpoofing;
if (ipv.copy_tooltip_cyberspace.softwareSan(processorFileMashup.trojan_dot_dos(1
        - 550382, interactive), deleteTextCompatible + lpiDslamMidi)) {
    fpu.artBackup.menu(path_daemon);
}
templateRwHandle.thin_os = mirrored;
if (filenameFlashIbm + kilohertzFormatPebibyte) {
    io.multitasking_recycle += overwrite_dvd_macro;
    website_applet += tween_mamp_file;
    paste_kindle_gif(ipv_dock_monitor(rootkit_commerce_link, pda_peripheral),
            675812, blog_refresh_drive(client_hibernate_joystick));
} else {
    delete_excel_wins += 848818 - balancingMouseCd;
}
              `
                }
              </code>
            </pre>
            <hr />
            <p>Or quote other people's work: </p>
            <blockquote>
              'The HTML blockquote Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation.
              Usually, this is rendered visually by indentation (see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#Usage_notes'>Notes</a> for how to change it).
            </blockquote>
            <hr />
            <h3>How about lists?</h3>
            <p>This is a bullet list</p>
            <ul>
              <li>First Element</li>
              <li>Second Element</li>
              <li>Third Element</li>
            </ul>
            <p>This is a numbered list</p>
            <ol>
              <li>First Element</li>
              <li>Second Element</li>
              <li>Third Element</li>
            </ol>
            <p>Nested Lists?</p>
            <ul>
              <li>Coffee</li>
              <li>
                Tea
                <ol>
                  <li>Black tea</li>
                  <li>Green tea</li>
                </ol>
              </li>
              <li>Milk</li>
            </ul>
            <h4>Credits</h4>
            <ul>
              <li>Uses <a href="https://fonts.floriankarsten.com/space-grotesk">Space Grotesk</a>, an open-source typeface by
              <a href="https://floriankarsten.com/"> Florian Karsten</a></li>
              <li>Color inspiration & dark mode toggle from <a href="https://gatsbyjs.org">Gatsby</a></li>
            </ul>
          </div>
          <footer>
            <p>
              Made by <a href="https://github.com/kartiknair">Kartik Nair</a> · View source on <a
                href="https://github.com/kartiknair/grotesk">GitHub</a>
            </p>
          </footer>
        </div>
      </Grotesk>
    )
  }
}
