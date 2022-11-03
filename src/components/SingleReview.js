import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview } from "../utils/api";

const SingleCategory = (props) => {
    const [review, setReview] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchReview(id).then((data) => setReview(data.review));
    }, [id]);
    return (
    <ul>
        <li key={review.title} class="review-box">
            <img className="review-image" src={review.review_img_url} alt={review.title}/>
            <p>{review.title}</p>
            <p class="designer">{review.designer}</p>
            <p>Review by {review.owner}</p>
            <p class="review-text">{review.review_body}</p>
        </li>
    </ul>
    );
}

export default SingleCategory;