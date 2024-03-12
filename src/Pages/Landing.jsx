import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import Box from './Landingbox'
import Row from './LandingRow'

function Landing({setCurrentPage}) {

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
      })
      .catch((err) => {
        console.log('error retrieving recents ', err)
      })
  }

  const changePage = () => {
    setByPage(recent.slice(filtered[0], filtered[1]))
    console.log('BY PAGE', byPage)
  }

  const handlePageSwitch = (context) => {
    if (context === '+') {
      setFiltered([filtered[0]+9,filtered[1]+9])
      console.log(filtered)
      setPage(page + 1)
    } else if (context === '-' && filtered[0] !== '0') {
      setFiltered([filtered[0]-9,filtered[1]-9])
      console.log(filtered)
      setPage(page - 1)
    } else if(context === 1){
      setFiltered([0,9])
      console.log(filtered)
      setPage(context)
    } else {
      if (page !== 1) {
        setFiltered([(filtered[0]*page)-9,page*9])
        console.log(filtered)
        setPage(context)
      }
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
    let temp = data.filter((item) => {
        if (item.type !== current ) {
          return false
        }
        return true;
    })
    setRecent(temp);
  }


  useEffect(() => {
    fetchData();
    console.log('FULL', data);
    filterByType()
    console.log('FILTERED', recent)
    changePage()
  }, [page, current])

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
            <Row context={current} setCurrentPage={setCurrentPage} recent={byPage}/>
          </div>
          <div className='landing-footer'>
            <div className='pagenum'>
              Page #
            </div>
              <div className='pagechange'>
                  <div className='leftarrow'
                  onClick={(() => {
                    handlePageSwitch('-')
                  })}
                  >{'<'}</div>

                  <div className='firstpage'
                  onClick={(() => {
                    handlePageSwitch(1)
                  })}
                  >1</div>
                  <div className='secondpage'>2</div>
                  <div className='thirdpage'>3</div>
                  <div className='fourthpage'>4</div>
                  <div className='rightarrow'
                  onClick={(() => {
                    handlePageSwitch('+')
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