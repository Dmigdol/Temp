import '../Sass/NewRow.scss'

function newRow({slide}) {

  /*
      LEFT OFF FIDDLING WITH CSS FOR ANIMATION
      THE SOLUTION SEEMS TO BE TO GROW THE LEFT DIV SLOWER THAN
      THE RATE THE RIGHT DIV SLIDES
  */


  return (
    <div className={slide ? 'Entry-frame init' : 'Entry-frame'}>
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