import React from 'react';
import Header from '../components/Header'
import Footer from "./Footer";
import Main from "./Main";



function App() {
  return (
      <body className="body">
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
      </body>
  );
}

export default App;
