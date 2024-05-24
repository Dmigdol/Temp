import { useEffect, useState } from "react";
import '../Sass/Login.scss'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


function Login({setCurrentPage, setLogged}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLogged(true)
    setCurrentPage(['Landing'])
  }

  return (
    <div className="App">

      <div className="Login frame">
        <Container>
          <Row className='logo-header'>
            <Col className='header-poly poly-left' md={3}>
            </Col>
            <Col className='logo-img'>
              <img className="Logoimg" src='VFlogo.png'/>
            </Col>
            <Col className='header-poly poly-right' md={3}>
            </Col>
          </Row>
          <Row className='login-body'>
            <Form.Group as={Col} md={8} className='email-login'>
              <Form.Label>Email</Form.Label>
              <Form.Control  placeholder='Email' name='email'></Form.Control>
            </Form.Group>
          </Row>
          <Row className='login-body'>
            <Form.Group  as={Col} md={8} className='password-login'>
              <Form.Label>Password</Form.Label>
              <Form.Control  placeholder='Password' name='password'></Form.Control>
            </Form.Group>
          </Row>
          <Row className='login-button-row'>
            <Button
              as={Col}
              md={4}
              onClick={()=>{handleLogin()}}
            >Login</Button>

          </Row>
        </Container>
        {/* <div className="Container Logo">
          <img className="Logoimg" src='VFlogo.png'/>
        </div>
          <div class="Container Header">
        </div>
        <div className="Container input">
          <form className="email">
            <input
            className='input'
            placeholder='Email...'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <form className="password">
            <input
            className='input'
            placeholder='Password...'
            type='text'
            onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <button class="button login"
          onClick={()=>{setCurrentPage(['Landing'])}}
        >Login</button>
        <div className="forgotText"
          onClick={()=>{ alert('Forgot Login Clicked'); }}
        >Forgot Login?</div> */}
      </div>
    </div>
  );
}

export default Login;

{/* <button className='test'
          onClick={() => {
            axios.get(`http://localhost:3000/api/test`)
              .then(function (response) {
                //handle success
                console.log(response);
              })
              .catch(function (error) {
                //handle error
                console.log('***ERROR*** ',error)
              })
              .finally(() => {
                console.log('request finished')
              });
          }}
          >
            Test
          </button> */}