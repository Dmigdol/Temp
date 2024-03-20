import './infobox.scss'
import { useState } from "react";



function RenderRecent({current, data}) {

  const [optShow, setOptShow] = useState(0);

  /*
    TO ADD
    Each row gets a small box
      on click >>
        small drop down appears
          • View Quote/Order
          • Edit Quote **NOT ORDER**
          • Delete **With Confirmation**

    Next
    Create Hidden absolute div to left of box
      On click render it

    LEFT OFF ***
      Render specific option box based off ID of entry
  */


  return (
    <div className='Entry'>
    {data.map((entry) => {
      return (
        <div key={entry.Idnum} className='info-box'>
            <span className='Number hb'>{entry.reference_id}</span>
            <span className='Name hb'>{entry.employee}</span>
            <span className='Client hb'>{entry.name}</span>
            <span className='Date hb'>{entry.date}</span>
            <div id={optShow ? `${entry.Idnum} show` : entry.Idnum} className={'options-list'}
            >
              <span className='options-view'>View {entry.type}</span>
              <span className='options-edit'>Edit {entry.type}</span>
              <span className='options-delete'>Delete {entry.type}</span>
            </div>
            <div className='options-box'
            onClick={() => {setOptShow(!optShow)}}
            >
              <img className="list-img" src='list.png' width='100%'/>
            </div>
          </div>
      )
    })}
    </div>
  )
}

export default RenderRecent;