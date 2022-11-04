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
    const { title, review_img_url, designer, owner, review_body, votes, review_id } = review;
    return (
    <ul>
        <li key={title} className="single-review">
            <img className="review-image" src={review_img_url} alt={title}/>
            <p>{title}</p>
            <p className="designer">{designer}</p>
            <p>Review by {owner}</p>
            <p className="review-text">{review_body}</p>
            <VoteBox votes={votes} id={review_id}/>
        </li>
    </ul>
    );
}

export default SingleCategory;