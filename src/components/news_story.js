import React, { Component } from 'react';
import NewsHeadline from './news_headline';
import NewsPublishedDate from './news_published_date';
import NewsThumbnail from './news_thumbnail';
import NewsDescription from './news_description';

class NewsStory extends Component {
  state = {
    data: null
  };

  render() {
    // Get the data for the story
    let {
      title,
      publishedAt,
      description,
      typeAttributes: { url, imageLarge }
    } = this.props.data;

    // Determine if it's a feature article
    let isFeatureItem = this.props.index % 5 === 0;

    // Set the class names
    let className = isFeatureItem
      ? 'news-feed__story news-feed__story--featured'
      : 'news-feed__story';

    // Render the description node if the story is a feature
    let descriptionNode = isFeatureItem ? (
      <NewsDescription description={description} />
    ) : (
      false
    );
    return (
      <a
        className={className + ' ' + this.props.additionalClasses}
        href={url}
        target='_self'
      >
        <NewsThumbnail image={imageLarge} alt={title} />
        <div className={'news-feed__story-content'}>
          <div className={'news-feed__story-content-top'}>
            <NewsHeadline title={title} />
            {descriptionNode}
          </div>
          <div className={'news-feed__story-content-bottom'}>
            <NewsPublishedDate publishedAt={publishedAt} />
          </div>
        </div>
      </a>
    );
  }
}

export default NewsStory;
