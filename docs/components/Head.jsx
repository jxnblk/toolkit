
import React from 'react';

class Head extends React.Component {

  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={this.props.description} />
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
    )
  }
}

export default Head;

