import React from 'react';
import { Row, Container, Col, Button, Jumbotron, CardText } from 'reactstrap';


class CompTentang extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="d-flex justify-content-between" style={{ backgroundColor: '#2F4A55' }}>
          <Container>
            <Row>
              <Col md="5">
                <img class="img-thumbnail" src="https://idwebhost.com/blog/wp-content/uploads/2018/12/Front-End-Developer-1024x512.jpg"></img>
              </Col>
              <Col md="7">
                <h2>Tentang Farming Code</h2>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates minima vel cum culpa, similique aperiam. Ex voluptate aut fugit, quo rem obcaecati minima delectus soluta reprehenderit molestias neque tempore.</CardText>
                <Button className="btn-outline-primary w-100">Join Now!</Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}


export default CompTentang;