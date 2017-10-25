// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// React CSS Modules implement automatic mapping of CSS modules. Every CSS
// class is assigned a local-scoped identifier with a global unique name. CSS
// Modules enable a modular and reusable CSS!
import CSSModules from 'react-css-modules';

// Declarative router component for React.
import  { Link } from 'react-router-component';

import styles from './home.css';

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
        <h1 className={styles.h1}>Home</h1>
        <div>
          <Link href="/test">test</Link>
        </div>
      </div>
    );
  }
}

export default Home;
