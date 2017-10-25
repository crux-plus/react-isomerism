// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// Declarative router component for React.
import  { Link } from 'react-router-component';

/**
 * @class
 */
class Home extends React.Component {
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
      <div>
        <h1>Home</h1>
        <div>
          <Link href="/test">test</Link>
        </div>
      </div>
    );
  }
}

export default Home;
