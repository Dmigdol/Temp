import './infobox.scss'


function renderRecent({context, data}) {

  return (
    <div className='Entry'>
    {data.map((entry) => {
      return (
        <div key={entry.Idnum} className='info-box'
          onClick={() => {
            alert(`${context} ID #${entry.reference_id}, name is ${entry.name}`);
          }}
          >

            <span className='Number hb'>{entry.reference_id}</span>
            <span className='Name hb'>{entry.employee}</span>
            <span className='Client hb'>{entry.name}</span>
            <span className='Date hb'>{entry.date}</span>
          </div>
      )
    })}
    </div>
  )
}

export default renderRecent;