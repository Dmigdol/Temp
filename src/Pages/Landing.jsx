import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import authFetch from '../axios/custom'
import LandingRow from './LandingRow'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import CustomerInput from './Components/CustomerInput.jsx'
import LandingFooter from './Components/LandingComponents/LandingFooter'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'


function Landing({setCurrentPage, optShow, setOptShow, wrapperRef}) {

  const [isLoading, setIsLoading] = useState(false)

  const [recent, setRecent] = useState([]);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState('quotes');
  const [filter, setFilter] = useState([0,9]);
  const [searchState, setSearchState] = useState('search-input first');
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('date');
  const [newQuote, setNewQuote] = useState(false);


  const tempEmployee = {
    name: 'Paul Allor',
    id: 1000,
    postion: 'admin',
    company: {
      billing_address: '21542 Roadway ave. Long Beach, CA',
      company_name: 'Kurb Bowyerman Plumbing',
      email: 'BuymyShoes@yahoo.com',
      id: 'cc112fd3-3d27-4bfe-b3f1-fec5d3c93d79',
      phone: '555-654-6544',
      shipping_address: '21542 Roadway ave. Long Beach, CA'
    }
  }

  const handleNewQuote = (e) => {
    setCurrentPage(['QuoteBuilder', tempEmployee])
  }


  const fetchData = () => {
    setIsLoading(true);
    if(tempEmployee.postion === 'admin') {
      axios.get(`http://localhost:3000/home`, {
        params: {
          id: tempEmployee.id
        }
      })
      .then(response => {
        console.log('response', response)
        setData(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('error retrieving history ', err)
      })
    }
  }


  const pageButtons = (context) => {
    switch(context) {
      case '<' :
        if (page === 1) {
          setPage(1);
          setFilter([0,9]);
        } else {
          setPage(page-1);
          setFilter([filter[0]-9, filter[1]-9])
        }
        break;
      case '>' :
        setPage(page + 1)
        setFilter([filter[0]+9, filter[1]+9])
        break;
      default :
        setPage(context)
        setFilter([(context-1)*9, context*9])
        break;
    }
  }

  const cutList = (data) => {
    if(data) {
      if (page === 1) {
        return(
          data.slice(0,9)
        )
      } else {
        console.log('filter', filter)
        return(
          data.slice(filter[0], filter[1])
        )
        }
      }
    }


    useEffect(() => {
      fetchData()
      console.log('full data', data)
    }, [current])

  const firstCheck = () => {
    if (searchState === 'search-input first' || 'search-input hide') {
      setSearchState('search-input show');
    }
    if (searchState === 'search-input show'){
      setSearchState('search-input hide')
    }
  }

  /*
    USE CUSTOMER INPUT ON ADMIN PAGE SO PAUL CAN CREATE NEW USERS FROM THERE
  */

  return (
    <div className="App">
      <div className="landing">
        <Container>
          <Row className='company-header'>
            <Col className='company-name' md={6}>
              {tempEmployee.company.company_name}
            </Col>
          </Row>
        </Container>
        <div className="landing center">
          <div className='row-container'>
            {(isLoading && data) ? <div className='loading'>Gathering Data, Please wait</div> :
            <LandingRow className='landing-list' wrapperRef={wrapperRef} context={current} setCurrentPage={setCurrentPage} data={cutList(data)} setOptShow={setOptShow} optShow={optShow}/>}
          </div>
          <div className='landing-footer'>
            <div className='pagenum'>
              Page {page}
            </div>
              <div className='pagechange'>
                  <div className='leftarrow'
                  onClick={(() => {
                    pageButtons('<')
                  })}
                  >{'<'}</div>
                  <div className='firstpage'
                  onClick={(() => {
                    pageButtons(1)
                  })}
                  >1</div>
                  <div className='secondpage'
                  onClick={(() => {
                    pageButtons(2)
                  })}
                  >2</div>
                  <div className='thirdpage'
                  onClick={(() => {
                    pageButtons(3)
                  })}>3</div>
                  <div className='fourthpage'
                  onClick={(() => {
                    pageButtons(4)
                  })}>4</div>
                  <div className='rightarrow'
                  onClick={(() => {
                    pageButtons('>')
                  })}
                  >{'>'}</div>
              </div>
          </div>
        </div>
      </div>
      <LandingFooter/>
    </div>
  )
}

export default Landing;