const fetchAllReviews = () => {
    return fetch('https://pacific-citadel-03998.herokuapp.com/api/reviews')
    .then(res => res.json())
};

const fetchReviewsByCat = (cat) => {
    return fetch(`https://pacific-citadel-03998.herokuapp.com/api/reviews?category=${cat}`)
    .then(res => res.json())
};

const fetchReview = (id) => {
    return fetch(`https://pacific-citadel-03998.herokuapp.com/api/reviews/${id}`)
    .then(res => res.json())
};

const patchReview = (id, num) => {
    return fetch(`https://pacific-citadel-03998.herokuapp.com/api/reviews/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify({ inc_votes: num })
    }).then(res => res.json())
};

export { fetchAllReviews, fetchReviewsByCat, fetchReview, patchReview };