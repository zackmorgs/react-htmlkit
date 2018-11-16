import React from 'react';

import './$Element.css';

let $Element = props => (
  <$Element {...props}>
    {props.children}
  </$Element>
);

export default $Element;