// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// Declarative router component for React.
import  { Locations, Location } from 'react-router-component';

import Home from 'react/isomerism/handlers/Home';

import Test from 'react/isomerism/handlers/Test';

/**
 * @class
 */
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
  componentWillReceiveProps(nextProps) {
    const {
      path,
    } = nextProps;
    this.setState({
      path,
    });
  }

  /**
   * @method
   */
  render() {
    return (
      <Locations>
        <Location path="/" handler={Home} />
        <Location path="/test" handler={Test} />
      </Locations>
    );
  }
}

Entry.propTypes = {
  path: PropTypes.string,
};

Entry.defaultProps = {
  path: '/',
};

export default Entry;
