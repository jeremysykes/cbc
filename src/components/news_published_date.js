import React, { Component } from 'react';
import Moment from 'react-moment';

class NewsPublishedDate extends Component {
  render() {
    return (
      <Moment format='YYYY/MM/DD' className={'news-feed__published-date'}>
        {this.props.publishedAt}
      </Moment>
    );
  }
}

export default NewsPublishedDate;
