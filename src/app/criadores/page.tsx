import React from "react";
import Container from "@/components/container";
import "./criadores.css";
import Card from "@/components/card";
import ImgMurilo from "/public/assets/img05.jpg";
import ImgThiago from "/public/assets/img04.jpg";
import ImgIan from "/public/assets/img06.png";

const Criadores = () => {
  return (
    <Container img="img07.png">
      <section className="criadores_main">
        <Card
          nome="Murilo Ribeiro"
          rm="555109"
          sala="1TDSPZ"
          github="https://github.com/murilors27"
          img={ImgMurilo.src}
        />

        <Card
          nome="Thiago Garcia"
          rm="99404"
          sala="1TDSPY"
          github="https://github.com/thiago-tonato"
          img={ImgThiago.src}
        />

        <Card
          nome="Ian Madeira"
          rm="555502"
          sala="1TDSPY"
          github="https://github.com/IanMadeira"
          img={ImgIan.src}
        />
      </section>
    </Container>
  );
};

export default Criadores;
