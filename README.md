
# react-htmlkit

I made this years ago thinking it would be cool if every DOM node has its own styles and behavior. 

### Example:

`// ./dist/A/A.js`

`import React from "react";`
`import "./A.scss";`

`let A = props => <a {...props}>{props.children}</a>;`

`export default A;`

As you can see this function will pass all props an behave like an A but it will also import its own SCSS file if you happen to use it.

## Instructions
1. `git clone https://github.com/zackmorgs/react-htmlkit.git` 
2. Copy/paste everything in `./dist` to a your your react app  in `./src` somewhere. (I choose `./src/html`)
3. Modify the files to your desire.

You can create everything in `./dist` by via `npm start`.