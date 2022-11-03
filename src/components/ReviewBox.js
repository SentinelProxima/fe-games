import { Link } from 'react-router-dom';

const ReviewBox = (props) => {
    return (
        <li key={props.title} class="review-box">
            <img className="review-image" src={props.review_img_url} alt={props.title}/>
            <p>{props.title}</p>
            <p class="designer">{props.designer}</p>
            <Link to={`/review/${props.review_id}`}>
                <p class="review-link">See more</p>
            </Link>
        </li>
    );
};

export default ReviewBox;

