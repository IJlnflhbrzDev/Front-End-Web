import React, { Fragment } from 'react';
import CompNavbars from '../CompNavbar/CompNavbar';
import CompJumbootrons from '../CompJumbotron/CompJumbotron';
import CompArtikels from '../CompArtikel/CompArtikel'
import CompBoxArtikels from '../CompArtikel/CompBoxArtikel';
import CompTentangs from '../CompCopyRight/CompTentang';
import TutorialHtml from '../CompTutorialHtml/Comp-List-html';
import PengenalanHtml from '../ComponentLearnHtml/CompPengenalanHtml';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

const CompHome = (props) => {
  return (

    <Fragment>
      <CompJumbootrons />
      <CompArtikels />
      <CompBoxArtikels />
      <CompTentangs />
    </Fragment>
  )
}
class Compage extends React.Component {
  render() {
    return (
      <Router>
        <CompNavbars />
        <Fragment>
          <Route path="/" exact component={CompHome} />
          <Route path="/List-Belajar-html" component={TutorialHtml} />
          <Route path="/pengenalan-html" component={PengenalanHtml} />
        </Fragment>

      </Router>

    )
  }
}

export default Compage;