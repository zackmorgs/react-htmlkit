const path = require('path');
const fs = require('fs');

const Elements = require('./HTMLTags');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let javascriptTemplate = elementName => {
  let jsTemplate = `import React from 'react';
  import './${elementName}.css';

  let ${elementName} = props => (
    <${elementName} {...props}>
      {props.children}
    </${elementName}>
  );

  export default ${elementName};
 `;

  return jsTemplate;
};

let scssTemplate = elementName => {
  let scssTemplate = `${elementName} {

  }`;

  return scssTemplate;
};

let writeJsFile = (elementName, fileContent) => {
  fs.writeFile(`./output/${elementName}.js`, fileContent, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${elementName}.js was saved!`);
  });
};

let writeScssFile = (elementName, fileContent) => {
  fs.writeFile(`./output/${elementName}.scss`, fileContent, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${elementName}.scss was saved!`);
  });
};

let makeFiles = elementName => {
  console.log('making:', elementName);
  writeScssFile(elementName, scssTemplate(elementName));
  writeJsFile(elementName, javascriptTemplate(elementName));
};

Elements.forEach(elementName => {
  makeFiles(capitalize(elementName));
});

console.log('done :D');
