import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByCat } from "../utils/api";
import ReviewBox from "./ReviewBox";

const SingleCategory = (props) => {
    const [reviews, setReviews] = useState([]);
    const { cat } = useParams();
    useEffect(() => {
        fetchReviewsByCat(cat).then((data) => setReviews(data.reviews));
    }, [cat]);
    return (
    <ul>
        {reviews.map((item) => (
            <ReviewBox title={item.title} review_img_url={item.review_img_url} designer={item.designer} review_id={item.review_id}/>
        ))}
    </ul>
    );
}

export default SingleCategory;