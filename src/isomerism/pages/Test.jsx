// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

/**
 * @class
 */
class Test extends React.Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * @method
   */
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

export default Test;

