import {Component, PropTypes} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import QuoteTop from '../QuoteTop.jsx'
import Button from 'react-bootstrap/Button';


function Quote2Canvas({data}) {

  function printDocument() {
    const input = document.getElementsByClassName('QuoteTop');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  return (
    <div>
      <div className='mb5'>
        <Button
        onClick={printDocument()}
        >PDF</Button>
      </div>
    </div>
  )
}

export default Quote2Canvas;
