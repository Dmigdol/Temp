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
// {Object.entries(recent).map((entry) => (
//   <div key={entry.Idnum} className='info-box'
//   onClick={() => {
//     alert(`${context} ID #${entry[1].reference_id}, name is ${entry[1].name}`);
//   }}
//   >
//     <span className='Number hb'>{entry[1].reference_id}</span>
//     <span className='Name hb'>{entry[1].employee}</span>
//     <span className='Client hb'>{entry[1].name}</span>
//     <span className='Date hb'>{entry[1].date}</span>
//   </div>
// ))
// }