import ReactToPrint from "react-to-print";

function QuoteToPrint({}) {

  reactToPrintContent = () => {
    return this.componentRef
  }

  return(
    <div>
      <ReactToPrint
        content={this.reactToPrintContent}
      />
    </div>
  )


}

export default QuoteToPrint;