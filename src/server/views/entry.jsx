// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// The ReactDOMServer object enables you to render components to static
// markup. Typically, it’s used on a Node server:
import ReactDOMServer from 'react-dom/server';

// React is the entry point to the React library. If you load React from a
// <script> tag, these top-level APIs are available on the React global.
import React from 'react';

// This reusable React component will manage all of your changes to the
// document head.
import { Helmet } from 'react-helmet';

import Boilerplate from 'server/components/commmon/Boilerplate';

import Head from 'server/components/commmon/Head';

import Entry from 'isomerism/routers/Entry';

/**
 * @class
 */
class entry extends React.Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    const {
      path,
    } = this.props;
    this.state = {
      path,
    };
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
      <Boilerplate>
        <Head />
        <Entry path={this.state.path} />
      </Boilerplate>
    );
  }
}

entry.propTypes = {
  path: PropTypes.string,
};

entry.defaultProps = {
  path: '/',
};

export default entry;
