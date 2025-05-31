
import '../Sass/QuoteTop.scss'

function QuoteTop({ data, quoteContext}) {

  console.log('QT data', data)

  return (
    <>
  <div className='Quote-top'>
    <div className='Company-info'>
      <span className='Company-Name'>{data.customer.company_name}</span>
      <span className='Company-Address-1'>{data.customer.shipping_address}</span>
      <span className='Company-email'>{data.customer.email}</span>
      <span className='Company-email'>{data.customer.phone}</span>
    </div>
    <div className='Quote-header'>
      <span className='Quote-Header-Text'>{data.customer.company_name}</span>
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
    </>
  )
}

export default QuoteTop;