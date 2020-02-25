# grotesk

A react component ([and css library](https://github.com/kartiknair/grotesk-css)) that uses the power of semantic HTML and [emotion](https://emotion.sh) to make beautiful web type simple.

[![NPM](https://img.shields.io/npm/v/grotesk.svg)](https://www.npmjs.com/package/grotesk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

For grotesk.css just head over to `./grotesk-css/downloads/` and get the `fonts.scss` & `grotesk.light.scss` files. If you would like the same font that the demo uses you can download it either from `./example/src/fonts/` or from it's [official website](https://fonts.floriankarsten.com/space-grotesk). Then add the `@font-face` to your css, or if you're using emotion to your `<Global>` element.

```css
/* CSS Example */
@font-face {
  font-family: space-grotesk;
  src: url(./fonts/SpaceGrotesk-Regular.woff2);
  font-weight: 400;
}

@font-face {
  font-family: space-grotesk;
  src: url(./fonts/SpaceGrotesk-Bold.woff2);
  font-weight: 800;
}
```

For the the react component just run `npm i grotesk` in your react app.

## grotesk vs grotesk.css

Which one is for you? I would personally recommend the css library for almost all people. Even if you are using a react project, for most cases the css library is good enough. The only cases where I would recommend the react component is when your project already uses emotion or if you are planning to do a lot of dynamic theming (like more than two themes).

## Simple usage (CSS)

Just download the above mentioned files and plug them into your project. For customization go [here](#customization-css)

## Simple Usage (React)

```jsx
import React from 'react'

import Grotesk from 'grotesk'

function Example() {
  return (
    <Grotesk>
      <div className="parent">
        <h1>This is how you use grotesk</h1>
        <p>I hope this helps you understand!</p>
      </div>
    </Grotesk>
  )
}
```

## Customization CSS

grotesk-css uses the power of scss variables to allow customization. I know css custom properties exist now, but I know some people would like to support legacy browsers like IE11 & I don;t want to discriminate against them.

The scss variables are pretty self explanatory in their names. Here's an example theme:

```scss
$bg: #131217;
$fg-body: rgba(255, 255, 255, 0.7);
$fg-headings: #e6e5e9;

$hr-color: rgba(255, 255, 255, 0.2);

$a-color: #b17acc;

$pre-bg: #1b191f;
$pre-color: $fg-body;

$inline-code-bg: #1b191f;
$inline-code-color: #ef6b6b;

$quote-bg: $bg;
$quote-border: #b17acc;
$quote-color: #6a727c;
```

## Customization React

The `<Grotesk>` component takes two props, a `theme` object and a boolean value called `fluid`. The former is an object that you can provide to theme grotesk the way you would like it, and the latter decides whether or not fluid typography is on (note that it is on by defualt).

The `theme` object has many properties to fully customize the look of grotesk and any excluded properties will default to the regular theme. Below is the default theme and also an example of a theme object:

```js
const theme = {
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
```

## Dark Mode (CSS)

To see how I implemented a dark mode for the demo website check out `./grotesk-css/`, the live version for it is at https://grotesk.now.sh

## Dark Mode (React)

To see how you can implement dark mode in a simple react application check out the example in `./example/`

## Final Notes

I'm sure there's probably some bugs in there that I haven't yet encountered so if you do encounter them just open an issue and I'll look into it asap. Also if you think you can improve grotesk just open a PR with your contribution and I'll add it in.

---

P.S: I would love to add a "Websites that use grotesk" secotion to the README, so if you've made a website using grotesk or if you have any feature requests either open a PR or just DM me over at twitter ([at]nairkartik_). I would love to hear from you. Peace. :v:

## License

MIT © [kartiknair](https://github.com/kartiknair)
