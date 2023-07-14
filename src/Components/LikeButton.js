import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1)
    };

    return (
        <div>
            {
                likes == 0 ?
                    <Button variant="outline-info" onClick={handleLike}>Like</Button>
                    :
                    <Button variant="outline-info" onClick={() => setLikes(likes - 1)}>Like</Button>
            }
            {/* <Button variant="outline-info" onClick={handleLike}>{likes ? 'Unlike' : 'Like'}</Button> */}
            <span> Likes {likes}</span>
        </div>
    );
}


export default LikeButton;