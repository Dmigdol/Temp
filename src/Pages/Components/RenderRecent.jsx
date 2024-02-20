import './infobox.scss'

function renderRecent({context, recent}) {


  return (
    <div className='Entry'>
      <div className='info-top'>
        <span className='Idbox'>{context} ID</span>
        <span className='Namebox'>Name</span>
      </div>
      {Object.entries(recent).map((entry) => (
        <div key={entry.Idnum} className='info-box'
        onClick={() => {
          alert(`${context} ID #${entry[1].reference_id}, name is ${entry[1].name}`);
        }}
        >
          <span className='Idnum'>{entry[1].reference_id}</span>
          <span className='customer'>{entry[1].name}</span>
        </div>
      ))
      }
    </div>
  )
}

export default renderRecent;