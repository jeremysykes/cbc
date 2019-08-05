import React, { Component } from 'react';

class NewsDescription extends Component {
  render() {
    let description = this.props.description;
    let characterLimit = 140;
    let overCharacterLimit = this.props.description.length > characterLimit;
    if (overCharacterLimit) {
      description = this.props.description.substring(0, characterLimit) + '...';
    }
    return <div className={'news-feed__description'}>{description}</div>;
  }
}

export default NewsDescription;
