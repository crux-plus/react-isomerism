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

/**
 * @class
 */
class Head extends React.Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    const {
      children,
    } = this.props;
    this.state = {
      expandHead: children,
    };
  }

  /**
   * @method
   */
  componentWillReceiveProps(nextProps) {
    const {
      children,
    } = nextProps;
    this.setState({
      expandHead: children,
    });
  }

  /**
   * @method
   */
  render() {
    return (
      <Helmet>
        <html lang="en" />,
        <title>Koa App</title>,
        <meta charset="utf-8" />,
        <meta http-equiv="x-ua-compatible" content="ie=edge" />,
        <meta name="description" content="This is a description" />,
        <meta name="viewport" content="width=device-width, initial-scale=1" />,
        {this.state.expandHead}
      </Helmet>
    );
  }
}

Head.propTypes = {
  children: PropTypes.object,
};

Head.defaultProps = {
  children: null,
};

export default Head;
