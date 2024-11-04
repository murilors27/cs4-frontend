import Link from "next/link";
import "../styles/home.css";
import Container from "@/components/container";

export default function Home() {
  return (
    <Container img="img01.jpg">
      <section className="main_container">
        <div>
          <h1 className="main_text">
            OpalaVision:
            <br />
            O futuro da <br />
            detecção ao <br />
            seu alcance.
          </h1>
        </div>

        <Link href="/opalavision" className="button">
          <span>Conheça o </span>

          <span>OpalaVision</span>
        </Link>
      </section>
    </Container>
  );
}
