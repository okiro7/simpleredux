import React, { Component } from 'react';
import '../css/App.css';
import TicketList from '../components/TicketList';
import Loader from '../components/Loader';



import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: papayawhip;
    font-family: 'Lato', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle/>
        <Loader />
        <TicketList/>
      </>
    );
  }
}

export default App;
