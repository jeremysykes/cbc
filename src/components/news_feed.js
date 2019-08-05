import React, { Component } from 'react';
import axios from 'axios';
import NewsStory from './news_story';
import NewsPagination from './news_pagination';
import loading from '../assets/images/loading.gif';

class NewsFeed extends Component {
  state = {
    json: null
  };

  getNewsStories() {
    if (this.state.json) {
      return this.state.json.map((story, index) => {
        let classes = index < 5 ? 'hidden' : '';
        return (
          <NewsStory
            index={index}
            key={story.id}
            data={story}
            additionalClasses={classes}
          />
        );
      });
    } else {
      return <img className={'loading'} src={loading} alt='Loading...' />;
    }
  }

  paginationClickHandler = e => {
    let buttons = document.querySelectorAll('.news-feed__pagination-button');
    buttons.forEach(el => el.classList.remove('active'));
    e.currentTarget.classList.add('active');
    this.togglePage(e.currentTarget.textContent);
  };

  togglePage = id => {
    let start = Number(id) === 1 ? 0 : 5;
    let articles = document.querySelectorAll('.news-feed__story');
    articles.forEach(el => el.classList.remove('hidden'));
    for (var i = start; i < start + 5; i++) {
      articles[i].classList.add('hidden');
    }
  };

  componentDidMount() {
    let endpoint = `https://www.cbc.ca/aggregate_api/v1/items?
    typeSet=cbc-ocelot&
    pageSize=28&
    page=1&
    orderLineupId=2.662&
    inline=relatedLinks&
    categorySlug=empty-category&
    source=Polopoly`;
    axios
      .get(endpoint)
      .then(response => this.setState({ json: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NewsPagination callback={this.paginationClickHandler} />
        <div className={'news-feed'}>{this.getNewsStories()}</div>
      </div>
    );
  }
}

export default NewsFeed;
