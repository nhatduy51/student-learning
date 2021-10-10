import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import {withRouter} from 'react-router-dom';
import React from 'react';



function App(props) {
  return (
    <React.Fragment>
        <Header />
          <section style={{height: '700px'}}>
            {props.children}
          </section>
        <Footer />
    </React.Fragment>
  
  );
}

export default withRouter (App);
