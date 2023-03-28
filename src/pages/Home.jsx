import React from "react";
import Highlight from "../components/Highlight";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Highlight />
      <Row
        rowID="1"
        title="McKay's Favorites"
        fetchURL={requests.requestMcKay}
      />
      <Row rowID="2" title="Harry Potter" fetchURL={requests.requestPotter} />
      <Row rowID="3" title="TV Shows" fetchURL={requests.requestTV} />
      <Row
        rowID="4"
        title="Jurassic Park"
        fetchURL={requests.requestJurassic}
      />
      <Row rowID="5" title="Star Wars" fetchURL={requests.requestStar} />
      <Row rowID="6" title="Studio Ghibli" fetchURL={requests.requestGhibli} />
      <Row
        rowID="7"
        title="Christopher Nolan"
        fetchURL={requests.requestNolan}
      />
      <Row rowID="8" title="Audrey Hepburn" fetchURL={requests.requestAudrey} />
      <Row
        rowID="9"
        title="The Lord of the Rings"
        fetchURL={requests.requestRings}
      />
      <Row rowID="10" title="X-Men" fetchURL={requests.requestX} />
      <Row
        rowID="11"
        title="Planet of the Apes"
        fetchURL={requests.requestApes}
      />
      <Row rowID="12" title="Christmas" fetchURL={requests.requestChristmas} />
      <Row rowID="13" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
