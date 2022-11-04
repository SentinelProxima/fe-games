import { Link } from 'react-router-dom';

const ReviewBox = (props) => {
    const { title, review_img_url, designer, review_id } = props.review;
    return (
        <li key={title} className="review-box">
            <img className="review-image" src={review_img_url} alt={title}/>
            <p>{title}</p>
            <p className="designer">{designer}</p>
            <Link to={`/review/${review_id}`}>
                <p className="review-link">See more</p>
            </Link>
        </li>
    );
};

export default ReviewBox;

