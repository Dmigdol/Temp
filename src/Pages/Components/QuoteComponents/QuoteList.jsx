import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <th>#</th>
            <th>Tag</th>
            <th>Room</th>
            <th>{'Size (W x H)'}</th>
            <th>Frame</th>
            <th>Hinge</th>
            <th>Strike</th>
            <th>Strike Height</th>
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
              <tr>
                <td>{entry.num}</td>
                <td>{entry.tag}</td>
                <td>{entry.room}</td>
                <td>{`${entry.width}" x ${entry.height}"`}</td>
                <td>{entry.frame}</td>
                <td>{entry.hinge}</td>
                <td>{entry.strike}</td>
                <td>{entry.strikeHeight}</td>
                {entry.closer === 'on' ? <td>True</td> : <td>False</td>}
                {entry.fireRating === 'on' ? <td>True</td> : <td>False</td>}
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