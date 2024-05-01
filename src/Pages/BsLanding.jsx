import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from 'axios';


function BsLanding() {

  const [isLoading, setIsLoading] = useState(false)
  const [current, setCurrent] = useState('quote');
  const [data, setData] = useState([]);


  const fetchData = () => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/api/${current}`)
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('error retrieving recents ', err)
      })
  }

  useEffect(() => {
    fetchData()
    console.log('full data', data)
  }, [current])


  return (
    <Table>
      <tr>
        <th>#</th>
        <th>Client</th>
        <th>Emplyoee</th>
        <th>Date</th>
      </tr>
    </Table>
  )
}

export default BsLanding;