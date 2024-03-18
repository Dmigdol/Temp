import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import Box from './Landingbox'
import Row from './LandingRow'

function Landing({setCurrentPage}) {

  const [renderCounter, setRenderCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [recent, setRecent] = useState([]);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState('quote');
  const [filter, setFilter] = useState([0,9]);
  const [searchState, setSearchState] = useState('search-input first');
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('date');


  const fetchData = () => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/api/${current}`)
      .then(response => {
        setData(response.data.slice(0,9))
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('error retrieving recents ', err)
      })
  }

  const pageButtons = (context) => {
    console.log(context)
    switch(context) {
      case '<' :
        page === 1 ? setPage(1) : setPage(page - 1);
        break;
      case '>' :
        setPage(page + 1)
        break;
      default :
        setPage(context)
        break;
    }
  }

  /*
      Cut list down to 9
      start at [0,9]
        if page is 1, set filter [0,9]
        otherwise set filter [page-1 * 9, page * 9]
  */

  const cutList = () => {
    if (page === 1) {
      // setFilter([0,9]);
      return(
        data.slice(0,9)
      )
    } else {
      console.log('[',(page-1)*9,',',page*9,']')
      return(
        data.slice((page-1)*9, page*9)
      )
      // setFilter([(page-1)*9, page*9])
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



  // const filterByType = () => {
  //   setRecent(data.filter((item) => {
  //     if (item.type !== current ) {
  //       return false
  //     }
  //     return true;
  // }));
  //   console.log('recent', recent)
  // }


  useEffect(() => {
    fetchData()
    console.log('cutList', cutList(data))
    console.log('full data', data)
  }, [page, current])

  return (
    <div className="App">
      {/* {isLoading ? <div>Loading</div> : */}
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
            <Row context={current} setCurrentPage={setCurrentPage} data={data}/>
          </div>
          <div className='landing-footer'>
            <div className='pagenum'>
              Page {page}
            </div>
            {/* eventually change this to conditionally render based off list size / 9 */}
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

      {/* } */}
    </div>
  )
}

export default Landing;