import React from "react";
import Navigation from "components/navigation/Navigation";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Rating from "components/rating/Rating";
import MainLayout from "components/mainLayout/MainLayout";
import ScrollToTop from "components/common/ScrollToTop";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Rating />
      <div className="mt-10"></div>
      <MainLayout />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
