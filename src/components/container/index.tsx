import Footer from "../footer";
import Header from "../header";
import "./container.css";

type ContainerProps = {
  children: React.ReactNode;
  img: string;
};

const Container: React.FC<ContainerProps> = ({ children, img }) => {
  return (
    <main
      style={{
        backgroundImage: `url(/assets/${img})`,
      }}
      className="container"
    >
      <section className="container-content">
        <Header />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Container;
