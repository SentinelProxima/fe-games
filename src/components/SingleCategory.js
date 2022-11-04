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
            <ReviewBox key={item.review_id} review={item}/>
        ))}
    </ul>
    );
}

export default SingleCategory;