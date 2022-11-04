import { useState } from "react";
import { patchReview } from "../utils/api";

const VoteBox = (props) => {
    const [currentVotes, setCurrentVotes] = useState(props.votes);
    const [userVote, setUserVote] = useState(0);
    const handleVoting = (num) => {
        setCurrentVotes((likes) => likes + num);
        setUserVote((userLike) => userLike + num);
        console.log(userVote);
        patchReview(props.id, num);
    }
    return (
        <div>
            <p className="vote">{currentVotes} likes</p>
            <button className={`vote${userVote}`} onClick={() => {
                handleVoting(1 - 2 * Math.max(userVote, 0));
            }}>Like</button>
            <button className={`vote${0 - userVote}`} onClick={() => {
                handleVoting(-1 - 2 * Math.min(userVote, 0));
            }}>Dislike</button>
        </div>
    )
};

export default VoteBox;