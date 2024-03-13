import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import Box from './Landingbox'
import Row from './LandingRow'

function Landing({setCurrentPage}) {

  const [renderCounter, setRenderCount] = useState(0)

  const [recent, setRecent] = useState([]);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState('quote');
  const [byPage, setByPage] = useState([])
  const [filtered, setFiltered] = useState([0,9])
  const [searchState, setSearchState] = useState('search-input first');
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('date');


  const fetchData = () => {
    axios.get(`http://localhost:3000/api/test`)
      .then(response => {
        setData(response.data)
        filterByType()
        changePage()
      })
      .catch((err) => {
        console.log('error retrieving recents ', err)
      })
  }

  const changePage = () => {
    setByPage(recent.slice(filtered[0], filtered[1]))
  }

  /* page switch
      four cases

      left arrow:
        If current page number -1 is not zero, decrement page number
      right arrow:
        If the total length of all data reaches beyond currently showed; ie theres
        another page after the current one, incriment page
      number > 1:
        set page to number clicked on
      number 1: set page to 1

  */

  const pageButtons = (context) => {
    switch(context) {
      case '<' :
        page - 1 === 0 ? setPage(page) : setPage(page - 1);
        break;
      case '>' :
        setPage(page + 1)
        break;
      default :
        setPage(context)
        break;
    }
  }


  const firstCheck = () => {
    if (searchState === 'search-input first' || 'search-input hide') {
      setSearchState('search-input show');
    }
    if (searchState === 'search-input show'){
      setSearchState('search-input hide')
    }
  }



  const filterByType = () => {
    setRecent(data.filter((item) => {
      if (item.type !== current ) {
        return false
      }
      return true;
  }));
    console.log('recent', recent)
  }


  useEffect(() => {
    fetchData()
    console.log('full data', data)
  }, [page])

  return (
    <div className="App">
      <div className="landing">
        <div className="landing Center">
          <div className="landing-headbar">
          <div className='search-btn-container'>
              <button className='search-btn'
              onClick={(() => {
                firstCheck()
              })}
              >Q</button>
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
              onClick={() => setCurrentPage('QuoteBuilder')}
              >+</div>
          </div>
          <div className='categories'>
            <span className='Number hb'>
              Number
            </span>
            <span className='Name hb'>
              Name
            </span>
            <span className='Client hb'>
              Client
            </span>
            <span className='Date hb'>
              Date
            </span>
          </div>
          <div className='row-container'>
            <Row context={current} setCurrentPage={setCurrentPage} recent={data}/>
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
                    pageButtons('2')
                  })}
                  >2</div>
                  <div className='thirdpage'
                  onClick={(() => {
                    pageButtons('3')
                  })}>3</div>
                  <div className='fourthpage'
                  onClick={(() => {
                    pageButtons('4')
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