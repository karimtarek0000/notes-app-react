import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import guardAuth from "../../guard/guardAuth";

function Auth() {
  return (
    <Container fluid>
      <div className="width-40 mx-auto height-100 d-flex flex-column justify-content-center">
        <h2 className="text-center mb-4">Notes App</h2>
        {/* Pages */}
        <Outlet />
      </div>
    </Container>
  );
}

export default guardAuth(Auth);
