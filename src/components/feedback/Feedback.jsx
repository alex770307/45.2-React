import { useState } from "react";
import './feedback.css'
function Feedback() {

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
    };

    const resetResults = () => {
        setLikeCount(0);
        setDislikeCount(0);
    };
    return (
        <>
        <h4>Homework04:</h4>
            <div className="feedback">
                <myButton className="myButton" onClick={handleLike}>Like {likeCount}</myButton>
                <myButton className="myButton" onClick={handleDislike}>Dislike {dislikeCount}</myButton>
                <myButton className="myButton" onClick={resetResults}>Reset Results</myButton>
            </div>
        </>
    )
}


export default Feedback;