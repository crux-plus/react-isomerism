// The react-dom package provides DOM-specific methods that can be used at the
// top level of your app and as an escape hatch to get outside of the React
// model if you need to. Most of your components should not need to use this
// module.
import ReactDOM from 'react-dom';

// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

import Entry from 'client/routers/Entry';

// Render a React element into the DOM in the supplied container and return a
// reference to the component (or returns null for stateless components).
ReactDOM.render(
  <Entry />,
  document.querySelector('main'),
);
