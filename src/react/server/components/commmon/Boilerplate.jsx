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
      children,
    } = this.props;
    const innerHTML = ReactDOMServer.renderToString(children);
    const helmet = Helmet.renderStatic();
    this.state = {
      title: helmet.title.toComponent(),
      meta: helmet.meta.toComponent(),
      link: helmet.link.toComponent(),
      script: helmet.script.toComponent(),
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
      script: helmet.script.toComponent(),
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
          {this.state.script}
        </body>
      </html>
    );
  }
}

Boilerplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

Boilerplate.defaultProps = {
  children: null,
};

export default Boilerplate;
