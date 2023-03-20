import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row
        rowID="1"
        title="McKay's Favorites"
        fetchURL={requests.requestMcKay}
      />
      <Row rowID="2" title="Harry Potter" fetchURL={requests.requestPotter} />
      <Row
        rowID="3"
        title="Jurassic Park"
        fetchURL={requests.requestJurassic}
      />
      <Row rowID="4" title="Star Wars" fetchURL={requests.requestStar} />
      <Row rowID="5" title="Studio Ghibli" fetchURL={requests.requestGhibli} />
      <Row
        rowID="6"
        title="Christopher Nolan"
        fetchURL={requests.requestNolan}
      />
      <Row rowID="7" title="Audrey Hepburn" fetchURL={requests.requestAudrey} />
      <Row
        rowID="8"
        title="The Lord of the Rings"
        fetchURL={requests.requestRings}
      />
      <Row rowID="9" title="X-Men" fetchURL={requests.requestX} />
      <Row
        rowID="10"
        title="Planet of the Apes"
        fetchURL={requests.requestApes}
      />
      <Row rowID="11" title="Christmas" fetchURL={requests.requestChristmas} />
      <Row rowID="12" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
