import './OptionsBox.scss'
import { useRef, useEffect, useState } from "react";


function OptionsBox({entry, optShow, setOptShow}) {



  return (
    <div>
      <div id={entry.id} className={'options-list'}>
        <div className='options-view spacing'>
          <img className="eye-img" src='visible-64.png' width='20%'/>
          <span className='options-view-text'>View {entry.type}</span>
        </div>
        <div className='options-edit spacing'>
          <img className="edit-img" src='pencil-2-64.png' width='15%'/>
          <span className='options-edit-text'>Edit {entry.type}</span>
        </div>
        <div className='options-delete spacing'>
          <img className="delete-img" src='delete-64.png' width='20%'/>
          <span className='options-delete-text'>Delete {entry.type}</span>
        </div>
      </div>
    </div>
  )
}

export default OptionsBox;