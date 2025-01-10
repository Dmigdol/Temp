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
import Search from './Components/SearchComponents/Search'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'


function Landing({setCurrentPage, optShow, setOptShow, wrapperRef, setQuoteContext, quoteContext}) {

  const [isLoading, setIsLoading] = useState(false)

  const [recent, setRecent] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [current, setCurrent] = useState('quotes');
  const [filter, setFilter] = useState([0,9]);
  const [searchState, setSearchState] = useState('search-input first');
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('date');
  const [newQuote, setNewQuote] = useState(false);
  const [keyword, setKeyword] = useState()


  const tempEmployee = {
    name: 'Paul Allor',
    id: 1000,
    position: 'admin',
    customer: {
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
    if(tempEmployee.position === 'admin') {
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
      var filteredList = data.filter(function(el) {
        return el.customer.company_name === tempEmployee.customer.company_name
      })
      return(filteredList)
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
        <Container className='company-header-whole'>
          <Row className='company-header name'>
            <Col className='company-name' md={6}>
              {tempEmployee.customer.company_name}
            </Col>
          </Row>
          <Row className='company-header email'>
            <Col className='company-email' md={'auto'}>
              {tempEmployee.customer.email}
            </Col>
            |
            <Col className='company-phone' md={'auto'}>
              {tempEmployee.customer.phone}
            </Col>
          </Row>
          <Row className='company-header address'>
            <Col className='company-add' md={6}>
              {tempEmployee.customer.billing_address}
            </Col>
          </Row>
        </Container>
        <div className='search-container'>
          <Search data={cutList(data)} setFilteredData={setFilteredData} keyword={keyword} setKeyword={setKeyword}/>
        </div>
        <div className="landing center">
          <div className='row-container'>
            {(isLoading && data) ? <div className='loading'>No Entries found, Please create a new Quote</div> :
            <LandingRow className='landing-list' wrapperRef={wrapperRef} keyword={keyword} context={current} setCurrentPage={setCurrentPage} data={cutList(data)} filteredData={filteredData}
             setOptShow={setOptShow} optShow={optShow} setQuoteContext={setQuoteContext} quoteContext={quoteContext}/>}
          </div>
        </div>
      </div>
      <LandingFooter customer={tempEmployee} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Landing;