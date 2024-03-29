import React from 'react';

const Rating = ({ voteAverage }) => {
    const maxStars = 5;
    const rating = Math.ceil(voteAverage / 2);

    const starIcons = Array.from({ length: maxStars }, (_, index) => (
        <i
            key={index}
            className={`mt-2 fas fa-star${index < rating && ''}`}
        ></i>
    ));

    return (<div className="stars-meter">{starIcons}</div>);
};

export default Rating;