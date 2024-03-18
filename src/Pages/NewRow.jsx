import { useState } from "react";
import '../Sass/NewRow.scss'
import Select from 'react-select'


function NewRow({slide, rowObj}) {

  const frameOptions = [
    {value: 'standard', label: 'Standard'},
    {value: 'ins', label: 'In-Swing'},
    {value: 'pivot', label: 'Pivot'}
  ]

  console.log('rowOBJ', rowObj)


  const [row, changeRow] = useState(rowObj);
  const [double, setDouble] = useState('single');

  // Data
  const [item, setItem] = useState({});

  const handleInput = (e) => {
    e.preventDefault()
    row[e.target.name] = e.target.value;
    console.log(row)
    // const name = e.target.name
    // const value = e.target.value
    // console.log('INPUT ',name,)
    // changeRow(values => ({...values, [name]: value  }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('prevented')
  }

  return (
    <div className={slide ? 'Entry-frame init' : 'Entry-frame'}>
      <div className='Input-container'>
        <div className='Form-container'>
          <form className='form-input'>
            <label> {`Item ID : `}
              <input
              className='Label-input'
              autoComplete="off"
              name='id'
              type='text'
              defaultValue={row.id || ''}
              onChange={e => {
                handleInput(e)
                e.preventDefault()
              }}
              onSubmit={e =>{
                handleSubmit(e)
                e.preventDefault()
              }}
              />
            </label>
            <label> {`Height : `}
              <input
              className='Height-input'
              type='number'
              name='height'
              defaultValue={row.height || ''}
              onChange={handleInput}
              />
            </label>
            <label> {`Width : `}
              <input
              className='Width-input'
              type='number'
              name='width'
              defaultValue={row.width || ''}
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
          <button className='form-submit' type='submit'>submit</button>
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