import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Table />
        <Footer />
      </div>
    )
  }
}

export default App;
