import React, { Fragment } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class CompArtikel extends React.Component {
  render() {
    return (
      <Container>
        <Fragment>
          <h2 className="text-center display-5 mb-2 mt-3">Artikel Terbaru</h2>
          <p className="text-center lead">Apa aja si yg baru di FarmingCode?</p>
        </Fragment>
        <hr color="text-primary" />
      </Container>


    )
  }
}


export default CompArtikel;
