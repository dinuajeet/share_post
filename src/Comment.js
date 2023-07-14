import React, {useState}from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Comment(props) {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//     return(
// <>
// <Button as="input" type="button" onClick={handleShow} value="Comment" />

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{props.user}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          comment
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" type="submit">Submit</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
    
//     )
// }

const Comment = () => {
  const [likes, setLikes] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    if(likes > 0){
      setLikes(likes - 1);
    }
  }

  const handleCommentToggle = () => {
    setShowComment(!showComment);
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  const handleCommentSubmit = () => {
    const newComment = {
      content: comment,
      likes: 0,
      replies: [],
    }

    setComments([...comments, newComment]);
    setComment('');
  }
  const handleReply = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].replies.push({content: 'Reply', likes: 0});
    setComments(updatedComments);
  }

  const handleLikeReply = (commentIndex, replyIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].likes += 1;
    setComments(updatedComments);
  }

  return(
    <div>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={handleCommentToggle}>comment</button>
      {showComment && (
        <div>
          <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder='Enter your comment'
          />
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
      )

      }
      {comments.map((comment, commentIndex) => (
        <div key={commentIndex}>
          <p>{comment.content}</p>
          <button onClick={() => handleLikeReply(commentIndex)}>Like({comment.likes})</button>
          {comment.replies.map((reply, replyIndex) =>(
            <div key={replyIndex}>
              <p>{reply.content}</p>
              <button onClick={() => handleLikeReply(commentIndex, replyIndex)}>Like({reply.likes})</button>
              <button onClick={() => 
              handleReply(commentIndex)}>Reply</button>
            </div>
          ))}
          </div>
      ))}
    </div>
  )
}
 
export default Comment;