// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// The final answer to a React Universal Component: simultaneous SSR + Code Splitting
import universal from 'react-universal-component';

export default universal((props) => import('isomerism/locations/Test'));

