import { useEffect, useState } from "react";

const Dashboard = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pacific-citadel-03998.herokuapp.com/api/reviews')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setReviews(data.reviews);
        })
    }, []);
    return (
    <ul>
        {reviews.map((item) => (
            <div class="review-box">
                <img class="review-image" src={item.review_img_url} alt={item.title}/>
                <p>{item.title}</p>
                <p class="designer">{item.designer}</p>
                <p>Review by {item.owner}</p>
                <p class="review-text">{item.review_body}</p>
            </div>
        ))}
    </ul>
    );
}

export default Dashboard;