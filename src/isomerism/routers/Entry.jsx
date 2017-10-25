// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// Declarative router component for React.
import  { Locations, Location } from 'react-router-component';

import Home from 'isomerism/pages/Home';

import Test from 'isomerism/pages/Test';

/**
 * @class
 */
class Entry extends React.Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    const {
      path,
    } = this.props;
    this.state = {
      path: path,
    };
    this.hanldeNavigation = this.hanldeNavigation.bind(this);
  }

  /**
   * @method
   */
  componentWillReceiveProps(nextProps) {
    const {
      path,
    } = nextProps;
    this.setState({
      path: path,
    });
  }

  /**
   * @method
   */
  render() {
    return (
      <Locations
        path={this.state.path}
        onNavigation={this.hanldeNavigation}
      >
        <Location path="/" handler={Home} />
        <Location path="/test" handler={Test} />
      </Locations>
    );
  }

  /**
   * @method
   */
  //hanldeNavigation(navigation, nextNavigation) {
  hanldeNavigation() {
    const {
      pathname: path,
    } = location;
    const nextProps = {
      ...this.props,
      path,
    };
    this.props = nextProps;
    this.componentWillReceiveProps(nextProps);
  }
}

Entry.propTypes = {
  path: PropTypes.string,
};

Entry.defaultProps = {
  path: '/',
};

export default Entry;
