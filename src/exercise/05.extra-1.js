// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

function Box({style, className = '', ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box
        className="box box--small"
        style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
      >
        small lightblue box
      </Box>

      <Box
        className="box box--medium"
        style={{backgroundColor: 'pink', fontStyle: 'italic'}}
      >
        medium pink box
      </Box>
      <Box
        className="box box--large"
        style={{backgroundColor: 'orange', fontStyle: 'italic'}}
      >
        large orange box
      </Box>
    </div>
  )
}

export default App