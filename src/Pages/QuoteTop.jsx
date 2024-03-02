
import '../Sass/QuoteTop.scss'

function QuoteTop() {

  return (
    <div className='Quote-top'>
      <div className='Company-info'>
        <span className='Company-Name'>Big Top Company</span>
        <span className='Company-Address-1'>12345 Main St.</span>
        <span className='Company-Address-2'>Winchester, VA 22601</span>
        <span className='Company-email'>email@emailwebsite.com</span>
        <span className='Company-email'>555-123-4567</span>
      </div>
      <div className='Quote-header'>
        <span className='Quote-Header-Text'>Big Top Company Quote 12345</span>
      </div>
      <div className='Pricing'>
        <div className='Sub-Total'>Sub-Total</div>
        <div className='Sub-Total-Text'>$100.00</div>
        <div className='Sales-Tax'>Sales-Tax</div>
        <div className='Sales-Tax-Text'>$30.00</div>
        <div className='Total'>Total</div>
        <div className='Total-Text'>$130.00</div>
      </div>
    </div>
  )
}

export default QuoteTop;