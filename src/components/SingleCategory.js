import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCategory = (props) => {
    const [reviews, setReviews] = useState([]);
    const { cat } = useParams();
    useEffect(() => {
        fetch(`https://pacific-citadel-03998.herokuapp.com/api/reviews?category=${cat}`)
        .then(res => res.json())
        .then((data) => {
            setReviews(data.reviews);
        })
    }, [cat]);
    return (
    <ul>
        {reviews.map((item) => (
            <li key={item.title} class="review-box">
                <img className="review-image" src={item.review_img_url} alt={item.title}/>
                <p>{item.title}</p>
                <p class="designer">{item.designer}</p>
                <p>Review by {item.owner}</p>
                <p class="review-text">{item.review_body}</p>
            </li>
        ))}
    </ul>
    );
}

export default SingleCategory;