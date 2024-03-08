import './infobox.scss'

function renderRecent({context, recent}) {

  console.log(recent)


  return (
    <div className='Entry'>
      {Object.entries(recent).map((entry) => (
        <div key={entry.Idnum} className='info-box'
        onClick={() => {
          alert(`${context} ID #${entry[1].reference_id}, name is ${entry[1].name}`);
        }}
        >
          <span className='Number'>{entry[1].reference_id}</span>
          <span className='Name'>{entry[1].employee}</span>
          <span className='Client'>{entry[1].name}</span>
          <span className='Date'>{entry[1].date}</span>
        </div>
      ))
      }
    </div>
  )
}

export default renderRecent;