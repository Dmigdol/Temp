import './infobox.scss'

function renderRecent({context, testData}) {


  return (
    <div className='Entry'>
      <div className='info-top'>
        <span className='Idbox'>{context} ID</span>
        <span className='Namebox'>Name</span>
      </div>
      {Object.entries(testData).map((entry) => (
        <div key={entry.Idnum} className='info-box'
        onClick={() => {
          alert(`${context} ID #${entry[1].reference}, name is ${entry[1].name}`);
        }}
        >
          <span className='Idnum'>{entry[1].reference}</span>
          <span className='customer'>{entry[1].name}</span>
        </div>
      ))
      }
    </div>
  )
}

export default renderRecent;