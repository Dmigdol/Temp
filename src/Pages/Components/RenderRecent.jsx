import testData from './testData.js'
import './infobox.scss'

function renderRecent({context}) {


  return (
    <div className='Entry'>
      {Object.entries(testData).map((entry) => (
        <div key={entry.Idnum} className='info-box'>
          <span className='Idnum'>{entry[1].reference}</span>
          <span className='customer'>{entry[1].name}</span>
        </div>
      ))
      }
    </div>
  )
}

export default renderRecent;