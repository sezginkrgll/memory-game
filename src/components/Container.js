import React from "react";
// Components
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
// Redux
import { useSelector } from "react-redux";

function Container() {
  const cards = useSelector((state) => state.memory.cards);

  return (
    <>
      <Header />
      <div className="playground">
        {cards.map((item, i) => (
          <Card key={i} img={item.img} id={item.id} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Container;
