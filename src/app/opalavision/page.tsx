import "./OpalaVision.css";
import Container from "@/components/container";

const OpalaVision = () => {
  return (
    <Container img="img02.jpg">
      <section className="main">
        <p className="container_text">
          Descubra o futuro da manutenção automotiva com o OPALAVISION da
          Chevotech. Este sensor mestre detecta problemas antes que se tornem
          grandes dores de cabeça, proporcionando uma visão clara e precisa do
          estado do seu veículo.
        </p>

        <p className="container_text">
          Com sua tecnologia avançada e interface amigável, o OPALAVISION é seu
          parceiro confiável na estrada, garantindo uma jornada segura e sem
          preocupações.
        </p>
      </section>
    </Container>
  );
};

export default OpalaVision;
