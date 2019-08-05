import React, { Component } from 'react';

class NewsHeadline extends Component {
  render() {
    return <h3 className={'news-feed__headline'}>{this.props.title}</h3>;
  }
}

export default NewsHeadline;
