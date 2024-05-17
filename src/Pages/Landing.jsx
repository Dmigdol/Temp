import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import Row from './LandingRow'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerInput from './Components/CustomerInput.jsx'
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
    postion: 'admin'
  }




  const fetchData = () => {
    setIsLoading(true);
    if(tempEmployee.postion === 'admin') {
      axios.get(`http://localhost:3000/api/test?id=${tempEmployee.id}`)
      .then(response => {
        setData(response.data[current])
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('error retrieving recents ', err)
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

  return (
    <div className="App">
      {/* {isLoading ? <div>Loading</div> : */}
      <CustomerInput newQuote={newQuote} setNewQuote={setNewQuote}/>
      <div className="landing">
        <div className="landing Center">
          <div className="landing-headbar">
          <div className='search-btn-container'>
              <FontAwesomeIcon className='search-btn'
              icon={byPrefixAndName.fass['magnifying-glass']}
              style={{color: "#605c5c",}}
              onClick={(() => {
                firstCheck()
              })}
              />
          </div>
          <div className='search-container'>
              <div className={searchState}></div>
          </div>
            <div className={current === 'quote' ? "quotes-headbar active" : "quotes-headbar"}
            onClick={(() => {
              setCurrent('quote')
            })}
            >Quotes
            </div>
            <div className={current === 'order' ? "orders-headbar active" : "orders-headbar"}
            onClick={(() => {
              setCurrent('order')
            })}
            >Orders
            </div>
            <div className='NewRow  button'
              onClick={() => setNewQuote(true)}
              >+</div>
          </div>
          <div className='row-container'>
            {(isLoading && data) ? <div className='loading'>Gathering Data, Please wait</div> :
            <Row wrapperRef={wrapperRef} context={current} setCurrentPage={setCurrentPage} data={cutList(data)} setOptShow={setOptShow} optShow={optShow}/>}
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
    </div>
  )
}

export default Landing;