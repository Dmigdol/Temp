import '../Sass/NewRow.scss'

function newRow() {


  return (
    <div className='Entry-frame'>
      <div className='Input-container'>
        <div className='Label input'>
        </div>
        <div className='Height input'>
        </div>
        <div className='Weight input'>
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

export default newRow;