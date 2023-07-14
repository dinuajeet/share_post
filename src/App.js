import React, { useState } from 'react';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import Comment from './Comment';
import LikeButton from './Components/LikeButton'
import CommentSection from './Components/CommentSection';

function App() {
  const [data, setData] = useState(0);
  const [name, setName] = useState();
  // const [sendDataCommentSection, setSendDataCommentSection] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  // const [modal, setModal] = useState()

  const loginForm = () => {
    setData(1);
  }
  const nameData = (e) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    setShowComponent(true);
    // setSendDataCommentSection(1)
  }
  // const comment = () => {
  //   setModal(1);
  // }

  return (
    <div className="App">
      <Container>
        {
          data === 0 ?
            <div className="Log-in"> <form name="loginForm" action="" id="form">
              <p><input type="text" placeholder="Username" onChange={nameData} /></p>
              <p><input type="password" placeholder="Password" /></p>
              <Button as="input" type="reset" value="Reset" /> &nbsp;
              <Button as="input" type="submit" onClick={loginForm} value="Login" />
            </form> </div> : " "
        }
      </Container>
      <br />
      <br />
      <br />
      <Container>
        {data === 1 ?
          <div className="com-button">
            {
              name
            }
            <br /><br />
            {/* <Button as="input" type="reset" value="Like" /> &nbsp; */}
            {/* <Comment   /> */}
            <Row>
              <Col> <LikeButton /> </Col>
              <Col xs={3}>
              </Col>
              <Col> <Button variant="secondary" onClick={handleClick}>Comment</Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col xs={8}>{showComponent && <CommentSection />}</Col>
              <Col></Col>
            </Row>
          </div>
          : " "
        }
      </Container>
      {/* <br />
            <br />
            <Comment /> */}
    </div>
  );
}

export default App;
