import './Rows.scss'

function RenderRow({rows, curr}) {



  return (
  <div className='quote-row-container'>
    {rows.length === 0 ? (
      <div className='individual-row'>
      <span className='Line-num quote-row'> </span>
      <span className='Item-ID quote-row'></span>
      <span className='Frame-type quote-row'></span>
      <span className='Hinge quote-row'></span>
      <span className='Item-Description quote-row'></span>
      <span className='Qty quote-row'></span>
      </div>
    ) : (
      <div className='individual-row'>
      <span className='Line-num quote-row'>{curr.num}</span>
      <span className='Item-ID quote-row'>{curr.id}</span>
      <span className='Frame-type quote-row'>{curr.frame}</span>
      <span className='Hinge quote-row'>{curr.hinge}</span>
      <span className='Item-Description quote-row'>{curr.desc}</span>
      <span className='Qty quote-row'>{curr.qty}</span>

      </div>

    )
    }
  </div>
  )
}

export default RenderRow;