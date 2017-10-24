// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// Declarative router component for React.
import  { Locations, Location } from 'react-router-component';

import Home from 'isomerism/pages/Home';

import Test from 'isomerism/pages/Test';

class Entry extends React.Component {
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
      <Locations path={this.props.path}>
        <Location path="/" handler={Home} />
        <Location path="/test" handler={Test} />
      </Locations>
    );
  }
}

export default Entry;
