import { useEffect, useState } from "react";
import '../Sass/Login.scss'
import axios from 'axios';



function Login({setCurrentPage}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <div className="Login frame">
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
          onClick={()=>{setCurrentPage(['Landing'])}}
        >Login</button>
        <div className="forgotText"
          onClick={()=>{ alert('Forgot Login Clicked'); }}
        >Forgot Login?</div>
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