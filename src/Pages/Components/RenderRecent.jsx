import './infobox.scss'
import { useState } from "react";



function RenderRecent({current, data}) {

  const [optShow, setOptShow] = useState(0);
  const [focus, setFocus] = useState('')

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

    On click >
      Helper function that takes current entry id and change that specific one
  */

      function toggleOptions(id) {
        optShow ? document.getElementById(id).className = 'options-list'
        : document.getElementById(id).className = 'options-list show';
        setOptShow(!optShow)
      }


  return (
    <div className='Entry'>
    {data.map((entry) => {
      console.log(entry.id)
      console.log(optShow)
      return (
        <div key={entry.id} className='info-box'>
            <span className='Number hb'>{entry.reference_id}</span>
            <span className='Name hb'>{entry.employee}</span>
            <span className='Client hb'>{entry.name}</span>
            <span className='Date hb'>{entry.date}</span>
            <div id={entry.id} className={'options-list'}
            >
              <span className='options-view'>View {entry.type}</span>
              <span className='options-edit'>Edit {entry.type}</span>
              <span className='options-delete'>Delete {entry.type}</span>
            </div>
            <div className='options-box'
            onClick={() => {toggleOptions(entry.id)}}
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