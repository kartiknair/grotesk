# grotesk

A react component that uses the power of semantic HTML and [emotion](https://emotion.sh) to make beautiful web type simple.

[![NPM](https://img.shields.io/npm/v/grotesk.svg)](https://www.npmjs.com/package/grotesk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save grotesk
```

## Simple Usage

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

## Customization

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

To see how you can implement a dark mode check out the example in `./example/` ([live version](https://grotesk.now.sh)).

## Final Notes

If you have any problems just open an issue and I'll look into it.

P.S: If you've made a website using grotesk or if you have any feature requests just holla at me over at twitter (@nairkartik\_), I would love to hear from you. Peace :v:

## License

MIT © [kartiknair](https://github.com/kartiknair)
