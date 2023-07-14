import React, { useState } from "react";
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CommentSection(Props) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    // const [commentHide, setCommentHide] = useState(1);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };
    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (newComment) {
            setComments([...comments, newComment]);
            setNewComment('');
            // if(Props.value == 1){
            //     console.log("getting props value", Props.value)
            //     setCommentHide(Props.value)
            // }else{
            //     console.log("after comment button",Props.value)
            // setCommentHide(0)
            // }
        }


    };
    return (
        <div>            
            <form onSubmit={handleCommentSubmit}>
                {/* <input type='text'
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Type here to write a comment"
                />
                <Button as="input" type="submit" value="Comment" /> */}
                {/* {
                    commentHide === 0 ? " " :  */}
                
               <InputGroup className="mb-3">
                    <Form.Control
                         placeholder="Type here to write a comment"
                        aria-label="Type here to write a comment"
                        onChange={handleCommentChange}
                        aria-describedby="basic-addon2"
                        value={newComment}
                    />
                    <Button as="input" type="submit" value="Comment" />
                </InputGroup>
                
{/* } */}
            </form>
            {comments.map((comment, index) => (
                <Row>
                    <Col><p key={index}>{comment}</p>
                    
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    {index !== comments.length - 1 && <hr className="horizontal-line" />}
                    </Row>
                    
            ))}
        </div>
    );
}
export default CommentSection;