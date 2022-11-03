import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        fetch('https://pacific-citadel-03998.herokuapp.com/api/categories')
        .then(res => res.json())
        .then((data) => {
            setCats(data.categories);
        })
    }, []);
    return (
        <div class="nav">
            <Link to="/">all</Link>
            {cats.map((item) => (
                <Link to={`/reviews/${item.slug}`}>
                <p class="nav-item">{item.slug}</p>
                </Link>
            ))}
        </div>
    );
};

export default Nav;