import './Rows.scss'

function RenderRow({rows}) {

  console.log('rows***',rows)


  return (
  <div className='quote-row-container'>
    {rows.length === 0 ? (
      <div className='individual-row'>
      <span className='Line-num quote-row'></span>
      <span className='Item-ID quote-row'></span>
      <span className='Frame-type quote-row'></span>
      <span className='Hinge quote-row'></span>
      <span className='Item-Description quote-row'></span>
      <span className='Qty quote-row'></span>
      </div>
    ) : (
      <div className='individual-row'>
      <span className='Line-num quote-row'>{rows[0].num}</span>
      <span className='Item-ID quote-row'>{rows[0].id}</span>
      <span className='Frame-type quote-row'>{rows[0].frame}</span>
      <span className='Hinge quote-row'>{rows[0].hinge}</span>
      <span className='Item-Description quote-row'>{rows[0].desc}</span>
      <span className='Qty quote-row'>{rows[0].qty}</span>
      </div>
    )
    }
  </div>
  )
}

export default RenderRow;