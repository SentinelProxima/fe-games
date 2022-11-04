import { Link } from 'react-router-dom';

const ReviewBox = (props) => {
    return (
        <li key={props.title} className="review-box">
            <img className="review-image" src={props.review_img_url} alt={props.title}/>
            <p>{props.title}</p>
            <p className="designer">{props.designer}</p>
            <Link to={`/review/${props.review_id}`}>
                <p className="review-link">See more</p>
            </Link>
        </li>
    );
};

export default ReviewBox;

