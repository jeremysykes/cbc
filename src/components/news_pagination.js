import React, { Component } from 'react';

class NewsPagination extends Component {
  componentDidMount() {
    let button = document.querySelector('.news-feed__pagination-button');
    button.focus();
  }

  render() {
    return (
      <div className={'news-feed__pagination'}>
        <button
          className={'news-feed__pagination-button active'}
          onClick={this.props.callback}
        >
          1
        </button>
        <button
          className={'news-feed__pagination-button'}
          onClick={this.props.callback}
        >
          2
        </button>
      </div>
    );
  }
}

export default NewsPagination;
