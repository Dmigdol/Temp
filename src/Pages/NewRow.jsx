import { useState } from "react";
import '../Sass/NewRow.scss'
import Select from 'react-select'
import RenderRow from './Components/RenderRow'
import Conditionals from './Components/Conditionals.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import  newDesc from './Helpers/DescBuilder.js'



function NewRow({slide, rowObj, setSlide, addRow}) {

  const [frame, selectFrame] = useState('standard');
  const [numOfDoors, setNumOfDoors] = useState('single')

  const frameOptions = [
    {value: 'standard', label: 'Standard'},
    {value: 'ins', label: 'In-Swing'},
    {value: 'pivot', label: 'Pivot'}
  ]

  const submitForm = (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);


    payload.num = rowObj.num;
    payload.frame = frame;
    payload.hinge = 'PH';
    payload.NumOfDoors = numOfDoors
    payload.strike = 'ASA'
    payload.handling = 'LH-r'

    payload.desc = newDesc(payload)

    console.log('submission :', payload)
    addRow(payload)
    setSlide(!slide)
  }

  const checkValididity = () => {
    // checks if all forms are filled
  }

  const [row, changeRow] = useState(rowObj);

  // Data
  const [item, setItem] = useState({});

  return (
    <div className={slide ? 'Entry-frame init' : 'Entry-frame'}>
      <div className='form-header'>
        <span className='form-header-text'>{`Entry #${rowObj.num}`}</span>
      </div>
      <span className='x-button'
        onClick={() => {
          setSlide(0)
        }}
      >&#x2715;</span>
      <div className='Input-container'>
        <div className='Form-container'>
          <form className='form-input' onSubmit={submitForm}>
            <label className='item-id'>
              <span className='item-id-text'>
              {`Item ID : `}
              </span>
              <input
              className='Label-input'
              autoComplete="off"
              name='id'
              type='text'
              defaultValue={row.id || ''}
              />
            </label>
            <label className='qty-input'>
              <span className='qty-input-text'>
                {'Quantity : '}
              </span>
              <input
              className='Qty-input'
              autoComplete="off"
              name='qty'
              type='number'
              defaultValue={1}
              />
            </label>
            <div className='button-headers'>
              <span className='button-headers-single'>Single</span>
              <span className='button-headers-double'>Double</span>
            </div>
            <div className='selection-container'>
              <div className='single-door' onClick={e => setNumOfDoors('single')}>
                <FontAwesomeIcon className='single-door-img' icon={byPrefixAndName.fass['door-closed']} style={{color: "#224e90"}} />
              </div>
              <div className='double-door' onClick={e => setNumOfDoors('double')}>
                <FontAwesomeIcon className='single-door-img' icon={byPrefixAndName.fass['door-closed']}/>
              </div>
            </div>
            <label className='width-id'>
              <span className='width-id-text'>
               {`Width (in) : `}
              </span>
              <input
              className='Width-input'
              type='number'
              name='width'
              defaultValue={row.width || ''}
              />
            </label>
            <label className='height-id'>
              <span className='height-id-text'>
              {`Height (in) : `}
              </span>
              <input
              className='Height-input'
              type='number'
              name='height'
              defaultValue={row.height || ''}
              />
            </label>
            <label className='frame-id'>
              <span className='frame-id-text'>
              {`Frame Type: `}
              </span>
                <Select
                className='frame-dropdown'
                onChange={e => {
                  selectFrame(e.label)
                }}
                options={frameOptions} />
            </label>
            {/* <Conditionals data={rowObj} /> */}
            <button className='form-submit' type='submit'>Continue</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewRow;