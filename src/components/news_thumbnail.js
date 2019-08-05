import React, { Component } from 'react';

class NewsThumbnail extends Component {
  render() {
    return (
      <figure className={'news-feed__thumbnail'}>
        <div className={'news-feed__thumbnail-placeholder'}>
          <div className={'news-feed__thumbnail-placeholder-background'} />
          <img
            className={'news-feed__thumbnail-image'}
            src={this.props.image}
            alt={this.props.alt}
          />
        </div>
      </figure>
    );
  }
}

export default NewsThumbnail;
