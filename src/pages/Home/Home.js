import React from 'react';
import '../../bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.PureComponent{
    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <p>O ConscienciaNegra.com.br é um portal dedicado à conscientização, reflexão e compartilhamento de conhecimento e cultura negra no Brasil.</p>
                        <p>"Não basta não ser racista, é preciso ser antirracista."- Angela Davis</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;