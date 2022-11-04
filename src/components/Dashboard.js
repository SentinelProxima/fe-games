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
        {reviews.map((item) => (
            <ReviewBox key={item.review_id} review={item}/>
        ))}
    </ul>
    );
}

export default Dashboard;