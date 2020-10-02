import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

const CompJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid className="text-center" id="paralax">
        <Container fluid>
          <h1 className="display-4 font-weight-bold">Forum Farming Code Programmer</h1>
          <p className="lead">Jangan tunggu nanti, Farming yuk sekarang biar cepat panen!</p>
          <a href="" className="btn btn-outline-info">BelajarSekarang!</a>

        </Container>

      </Jumbotron>
    </div>
  );
};


export default CompJumbotron;

