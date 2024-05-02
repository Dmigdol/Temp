
import '../Sass/QuoteTop.scss'

function QuoteTop({ data }) {

  console.log('QT data', data)

  return (
    <div className='Quote-top'>
      <div className='Company-info'>
        <span className='Company-Name'>{data.name}</span>
        <span className='Company-Address-1'>12345 Main St.</span>
        <span className='Company-Address-2'>Winchester, VA 22601</span>
        <span className='Company-email'>email@emailwebsite.com</span>
        <span className='Company-email'>555-123-4567</span>
      </div>
      <div className='Quote-header'>
        <span className='Quote-Header-Text'>Big Top Company Quote 12345</span>
      </div>
      <div className='Pricing'>
        <span className='Sub-Total'>Sub-Total</span>
        <span className='Sub-Total-Text'>$100.00</span>
        <span className='Sales-Tax'>Sales-Tax</span>
        <span className='Sales-Tax-Text'>$30.00</span>
      </div>
      <div className='Total-Container'>
        <span className='Total'>Total</span>
        <span className='Total-Text'>$130.00</span>
      </div>
    </div>
  )
}

export default QuoteTop;