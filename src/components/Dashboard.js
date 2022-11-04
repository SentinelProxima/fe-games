import { useEffect, useState } from "react";
import { fetchAllReviews } from "../utils/api";
import ReviewBox from "./ReviewBox";

const Dashboard = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetchAllReviews().then((data) => setReviews(data.reviews));
    }, []);
    return (
    <ul>
        {reviews.map((item, index) => (
            <ReviewBox key={index} title={item.title} review_img_url={item.review_img_url} designer={item.designer} review_id={item.review_id}/>
        ))}
    </ul>
    );
}

export default Dashboard;