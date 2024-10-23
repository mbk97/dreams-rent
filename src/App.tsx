import React from "react";
import Navigation from "components/navigation/Navigation";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="mt-10"></div>
      <Footer />
    </div>
  );
}

export default App;
