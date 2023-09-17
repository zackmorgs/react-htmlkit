const path = require('path');
const fs = require('fs');

const Elements = require('./HTMLTags');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let javascriptTemplate = elementName => {
  let jsTemplate = `import React from 'react';
  import './${elementName}.scss';

  let ${elementName} = props => (
    <${elementName.toLowerCase()} {...props}>
      {props.children}
    </${elementName.toLowerCase()}>
  );

  export default ${elementName};
 `;

  return jsTemplate;
};

let scssTemplate = elementName => {
  let scssTemplate = `${elementName} {}`;

  return scssTemplate;
};

let writeJsFile = (elementName, fileContent) => {
  fs.writeFile(`./dist/${elementName}/${elementName}.jsx`, fileContent, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${elementName}.js was saved!`);
  });
};

let writeScssFile = (elementName, fileContent) => {
  fs.writeFile(`./dist/${elementName}/${elementName}.scss`, fileContent, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${elementName}.scss was saved!`);
  });
};

let makeFolder = (elementName) => {
  !fs.existsSync('./dist/' + elementName) ? 
    fs.mkdirSync('./dist/' + elementName) :
    console.err('Something went wrong making a folder. HTML Tag Name:' + elementName)
};


let makeFiles = elementName => {
  console.log('making:', elementName);
  
  makeFolder(elementName);
  writeScssFile(elementName, scssTemplate(elementName));
  writeJsFile(elementName, javascriptTemplate(elementName));
};

Elements.forEach(elementName => {
  makeFiles(capitalize(elementName));
});

// makeFolder('test');

console.log('done :D');
