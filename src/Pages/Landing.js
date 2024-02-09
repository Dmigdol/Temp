import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';



function Landing() {

  const [email, setEmail] = useState('Email...');
  const [password, setPassword] = useState('Password...');

  return (
    <div className="App">
      <div className="Landing-Frame">
        <div className="Container Logo">
          <img className="Logoimg" src='VFlogo.png'/>
        </div>
          <div class="Container Header">
          <span className="Heading"> Sign In</span>
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
          onClick={()=>{ alert(`Login Clicked
          Email is ${email}.
          Password is ${password}.
          `); }}
        >Login</button>
        <div className="forgot"
          onClick={()=>{ alert('Forgot Login Clicked'); }}
        >Forgot Login?</div>
      </div>
    </div>
  );
}

export default Landing;

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