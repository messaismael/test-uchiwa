import { Container, Footer, Header } from "components";
import { Outlet } from "react-router";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export { Layout };
