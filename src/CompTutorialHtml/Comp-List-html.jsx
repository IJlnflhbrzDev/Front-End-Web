import React, { Fragment } from 'react';
import { Table, Jumbotron, Container, CardText, Card, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
class TutorialHtml extends React.Component {
  render() {
    return (
      <Fragment>

        <div id="Comp-List-Html">

          <Jumbotron >
            <Container>
              <div className="text-center">
                <h1 className="display-5 p-5"> BASIC HTML UNTUK PEMULA</h1>
                <CardText>Mari Belajar HTML dari dasar hingga bisa hosting web sendiri</CardText>
              </div>
            </Container>
          </Jumbotron>
          <Card>
            <Container>
              <h3 className=" p-3">DAFTAR LIST HTML</h3>
              <div>
                <Row>
                  <Col md="12">
                    <ul>
                      <li><Link to="/pengenalan-html">Belajar HTML #01 – Pengenalan Dasar HTML untuk Pemula</Link></li>
                      <li><Link to="/pengenalan-html#2">Belajar HTML #02 – Mengenal Tag, Elemen, dan Atribut dalam HTML</Link></li>
                      <li><Link to="/pengenalan-html#3">Belajar HTML #03 – Membuat Paragraf di HTML</Link></li>
                      <li><Link to="/pengenalan-html#4">Belajar HTML #04 – Membuat Heading di HTML</Link></li>
                      <li><Link to="/pengenalan-html#5">Belajar HTML #05 – Cara Membuat Komentar</Link></li>
                      <li><Link to="/pengenalan-html#6">Belajar HTML #06 – Text Formatting di HTML</Link></li>
                      <li><Link to="/pengenalan-html#7">Belajar HTML #07 – Membuat Link pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#8">Belajar HTML #08 – Menampilkan Gambar di HTML</Link></li>
                      <li><Link to="/pengenalan-html#9">Belajar HTML #09 – Membuat List pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#10">Belajar HTML #10 – Membuat Tabel pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#11">Belajar HTML #11 – Membuat Form pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#12">Belajar HTML #12 – Mengenal Element Semantik pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#13">Belajar HTML #13 – Memanpilkan Vidio pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#14">Belajar HTML #14 – Menambahkan Audio pada HTML</Link></li>
                      <li><Link to="/pengenalan-html#15">Belajar HTML #15 – Membuat Project Web Pribadi dengan HTML</Link></li>
                    </ul>

                  </Col>
                </Row>
                <hr color="text-primary" />
              </div>
            </Container>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default TutorialHtml; 