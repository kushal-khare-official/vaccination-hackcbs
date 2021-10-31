import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by IERTians
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
