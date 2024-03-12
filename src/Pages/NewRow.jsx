import { useEffect, useState } from "react";
import '../Sass/NewRow.scss'
import Select from 'react-select'


function NewRow({slide, rowObj}) {

  const frameOptions = [
    {value: 'standard', label: 'Standard'},
    {value: 'ins', label: 'In-Swing'},
    {value: 'pivot', label: 'Pivot'}
  ]


  const [row, changeRow] = useState({});
  const [double, setDouble] = useState('single');

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    changeRow(values => ({...values, [name]: value  }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('prevented')
    console.log(row)
  }

  return (
    <div className={slide ? 'Entry-frame init' : 'Entry-frame'}>
      <div className='Input-container'>
        <div className='Form-container'>
          <form className='form-input' submit={handleSubmit}>
            <label> {`Item ID : `}
              <input
              className='Label-input'
              name='id'
              type='text'
              value={row.id || ''}
              onChange={handleInput}
              />
            </label>
            <label> {`Height : `}
              <input
              className='Height-input'
              type='number'
              name='height'
              value={row.height || ''}
              onChange={handleInput}
              />
            </label>
            <label> {`Width : `}
              <input
              className='Width-input'
              type='number'
              name='width'
              value={row.width || ''}
              onChange={handleInput}
              />
            </label>
              <label> {`Frame Type: `}
                <Select
                className='frame-dropdown'
                options={frameOptions} />
              </label>
              <div className='selection-container'>
                <button type="button" className='single selector'>S</button>
                <button type="button" className='double selector'>D</button>
              </div>
          <button className='form-submit' type='submit' submit={handleSubmit}>submit</button>
          </form>
        </div>
      </div>
      <div className='Drop-container'>
        <div className='DoorFrame selection'>
        </div>
        <div className='Checkbox'>
          {/* single or double? */}
        </div>
        <div className='Hinge selection'>
        </div>
      </div>
    </div>
  )
}

export default NewRow;