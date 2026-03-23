import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email
      })
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  // Define styles as objects
  const containerStyle = {
    background: "#FFFFFF",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "left"
  };

  const formBoxStyle = {
    background: "#fff",
    padding: "5px",
    borderRadius: "20px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    border: "1px solid #4A4A4A",
    marginTop: "20px"
  };

  const inputStyle = {
    width: "100%",
    color: "#000",
    fontWeight: "500",
    background: "transparent",
    border: "none",
    padding: "0 15px",
    outline: "none"
  };

  const buttonStyle = {
    background: "linear-gradient(90.21deg, #00bbff -5.91%, #4A2FBD 111.58%)",
    padding: "15px 30px",
    color: "#fff",
    fontWeight: "600",
    letterSpacing: "0.5px",
    borderRadius: "16px",
    border: "none",
    cursor: "pointer"
  };

  return (
      <Col lg={12}>
        <div style={containerStyle} className="newsletter-bx wow slideInUp">
          <Row className="align-items-center">
            <Col xs={12} md={12} xl={5}>
              <h3 style={{ margin: "0", color: "#121212" }}>
                Subscribe to our Newsletter<br /> & Never miss latest updates
              </h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger" style={{ marginTop: "10px" }}>{message}</Alert>}
              {status === 'success' && <Alert variant="success" style={{ marginTop: "10px" }}>{message}</Alert>}
            </Col>
            <Col xs={12} md={12} xl={7}>
              <form onSubmit={handleSubmit}>
                <div style={formBoxStyle}>
                  <input 
                    style={inputStyle}
                    value={email} 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email Address" 
                  />
                  <button style={buttonStyle} type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}