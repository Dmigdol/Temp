import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://lgfhzumbxexugypmmnew.supabase.co/",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZmh6dW1ieGV4dWd5cG1tbmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNzI2NTQsImV4cCI6MjAyMjc0ODY1NH0.zCHDum90o-4d6OkehiIqIhfgoZzuSL9VNBDGGPXdJ30");


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> branch test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
