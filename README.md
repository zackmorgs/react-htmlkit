a component for every html element. this way whenever you include the component it also brings it's required CSS.

`import React from 'react';

import './$Element.css';

let $Element = props => (
  <$Element {...props}>
    {props.children}
  </$Element>
);

export default $Element;`

for use with react and such.

i kept writing similar code and figured id save time just making this. 

---

idk what else ill do with it but these sure are easy to extend. 

if you're interested in how they're made check out make.js - code written very fast so not great but aye it works just fine.