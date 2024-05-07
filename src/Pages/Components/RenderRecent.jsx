import './infobox.scss'
import OptionsBox from './OptionsBox.jsx'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import ListModal from './ListModal.jsx'
import { useRef, useEffect, useState } from "react";



function RenderRecent({current, data, setCurrentPage}) {


  const [clicked, setClicked] = useState();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);


  return (


    <div className='Entry' >
      <ListModal setShow={setShow} setCurrentPage={setCurrentPage} show={show} data={clicked}/>
      <Container className='mx-2'>
        <Table hover className='table-large'>
          <thead>
            <tr style={{'text-align': 'left'}}>
              <th>ID</th>
              <th>Client</th>
              <th>Employee</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => {
              console.log('renderdata',entry)
              return (
                <tr id={entry.reference_id} className='table-cell' onClick={((e) => {
                  setClicked(entry)
                  handleShow()
                })}>
                    <td>{entry.quote_id.slice(0,5)}</td>
                    <td className='col-4'>{entry.customer.company_name}</td>
                    <td >{entry.employee.employee_name}</td>
                    <td>{entry.created_at}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    {/* {data.map((entry) => {
      return (
        <div key={entry.id} className='info-box' ref={wrapperRef}>
            <span className='Number hb'>{entry.reference_id}</span>
            <span className='Name hb'>{entry.employee}</span>
            <span className='Client hb'>{entry.name}</span>
            <span className='Date hb'>{entry.date}</span>
            <OptionsBox entry={entry}/>
            <div className='options-box'
            onClick={() => {
              toggleOptions(entry.id, 'id')}}>
              <img id={entry.id} className="list-img" src='list.png' width='100%'/>
            </div>
          </div>
      )
    })} */}
    </div>
  )
}

export default RenderRecent;

//    EXPERIMENTAL HIDING WHEN CLICK OUT

// const wrapperRef = useRef(null);

// function useOutsideAlerter(ref) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setOptShow(false)
//         console.log(optShow)
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }


// useOutsideAlerter(wrapperRef);