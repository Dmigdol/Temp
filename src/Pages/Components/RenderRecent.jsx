import './infobox.scss'

function renderRecent({context, recent}) {


  const check = (entry) => {
    if (entry[1].type === context) {
      return (
        <div key={entry.Idnum} className='info-box'
        onClick={() => {
          alert(`${context} ID #${entry[1].reference_id}, name is ${entry[1].name}`);
        }}
        >
          <span className='Number hb'>{entry[1].reference_id}</span>
          <span className='Name hb'>{entry[1].employee}</span>
          <span className='Client hb'>{entry[1].name}</span>
          <span className='Date hb'>{entry[1].date}</span>
        </div>
      )
    }
  }


  return (
    <div className='Entry'>
      {Object.entries(recent).map((entry) => (
        check(entry)
      ))
      }
    </div>
  )
}

export default renderRecent;