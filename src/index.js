import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompRouterPage from './HalamanHome/CompRouterPage';

// =============== Pemangilan Semua Fungsi ==================
class CompNavbar extends React.Component {
  render() {
    return (
      <CompRouterPage />
    )
  }
}
ReactDOM.render(<CompRouterPage />, document.getElementById('CompNavbar'))
