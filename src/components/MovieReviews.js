// Code MovieReviews Here

// Your MovieReviews component should be stateless and functional.

// You are free to lay out each review as you like using the data that the API returns, 
// but make sure that the component outputs a top-level element with the class
// review-list and that each review is wrapped by an element with class review.

import React from 'react'

const Review = ( {headline, summary_short, link} ) => {
    return (
        <div key={headline} className="review" >
            <a className="review-link" href={link.url}><h2>{headline}</h2></a>
            <h3>{summary_short}</h3><br />
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;