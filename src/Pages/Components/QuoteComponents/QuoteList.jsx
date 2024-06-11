import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuoteComponentsSCSS/QuoteList.scss'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function QuoteList({rows, slide, setShow, setSlide, setInputs}) {

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th className='th'>#</th>
            <th>Tag</th>
            <th>Room</th>
            <th>{'Size (W x H)'}</th>
            <th>Frame</th>
            <th>Hinge</th>
            <th>Strike</th>
            <th>DeadBolt</th>
            <th>Closer</th>
            <th>Fire Rating</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Ext Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((entry) => {
            console.log('renderdata', entry)
            return (
              <tr className='quote-row-entry'>
                <td>{entry.num}</td>
                <td>{entry.tag}</td>
                <td>{entry.room}</td>
                <td>{`${entry.width}" x ${entry.height}"`}</td>
                <td>{entry.frame}</td>
                <td>{entry.hinge}</td>
                <td>{`${entry.strike} ${entry.strikeHeight}"`}</td>
                {entry.deadBolt === 'on' ? <td>Yes</td> : <td>No</td>}
                {entry.closer === 'on' ? <td>Yes</td> : <td>No</td>}
                {entry.fireRating === 'on' ? <td>Yes</td> : <td>No</td>}
                <td>{entry.qty}</td>
                <td>PH</td>
                <td>PH</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Button
        className='new-button'
        aria-expanded={slide}
        onClick={()=> {
          setSlide(!slide)
          setShow(true)
        }}
      >New Row</Button>
    </Container>
  )
}
export default QuoteList;