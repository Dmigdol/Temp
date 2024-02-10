import { useEffect, useState } from "react";
import Login from './Login';
import Landing from './Landing';

function App() {

  function renderSwitch(param) {
    switch(param) {
      case 'Login':
        return <Login/>;
        break;
      case 'Landing' :
        return <Landing/> ;
        break;
    }
  }

  const [currentPage, setCurrentPage] = useState('Login');


  return (
    <div>
      {renderSwitch(currentPage)}
    </div>
  )

}

export default App;