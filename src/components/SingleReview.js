import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview } from "../utils/api";
import VoteBox from "./VoteBox";

const SingleCategory = (props) => {
    const [review, setReview] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchReview(id).then((data) => setReview(data.review));
    }, [id]);
    return (
    <ul>
        <li key={review.title} className="single-review">
            <img className="review-image" src={review.review_img_url} alt={review.title}/>
            <p>{review.title}</p>
            <p className="designer">{review.designer}</p>
            <p>Review by {review.owner}</p>
            <p className="review-text">{review.review_body}</p>
            <VoteBox votes={review.votes} id={review.review_id}/>
        </li>
    </ul>
    );
}

export default SingleCategory;