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
class Boilerplate extends React.Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    const {
      helmet,
      children,
    } = this.props;
    this.state = {
      title: helmet.title.toComponent(),
      meta: helmet.meta.toComponent(),
      link: helmet.link.toComponent(),
      htmlAttrs: helmet.htmlAttributes.toComponent(),
      bodyAttrs: helmet.bodyAttributes.toComponent(),
      innerHTML: ReactDOMServer.renderToString(children),
    };
  }

  /**
   * @method
   */
  componentWillReceiveProps(nextProps) {
    const {
      helmet,
      children,
    } = nextProps;
    this.setState({
      title: helmet.title.toComponent(),
      meta: helmet.meta.toComponent(),
      link: helmet.link.toComponent(),
      htmlAttrs: helmet.htmlAttributes.toComponent(),
      bodyAttrs: helmet.bodyAttributes.toComponent(),
      innerHTML: ReactDOMServer.renderToString(children),
    });
  }

  /**
   * @method
   */
  render() {
    return (
      <html {...this.state.htmlAttrs}>
        <Helmet>
          <html lang="en" />
          <title>Koa App</title>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="This is a description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <head>
          {this.state.title}
          {this.state.link}
          {this.state.meta}
        </head>
        <body {...this.state.bodyAttrs}>
          <main
            dangerouslySetInnerHTML={{__html: this.state.innerHTML}}
          >
          </main>
        </body>
      </html>
    );
  }
}

Boilerplate.propTypes = {
  helmet: PropTypes.object,
  children: PropTypes.object,
};

Boilerplate.defaultProps = {
  helmet: null,
  children: null,
};

export default Boilerplate;
