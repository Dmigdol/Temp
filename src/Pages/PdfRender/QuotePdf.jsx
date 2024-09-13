import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import QuoteTop from '../QuoteTop.jsx'
import QuoteFooter from '../Components/QuoteComponents/QuoteFooter.jsx'
import QuoteList from '../Components/QuoteComponents/QuoteList.jsx'


function QuotePdf({data}) {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  const MyDocument = () => {
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <QuoteTop data={data}/>
        </View>
      </Page>
    </Document>
  }


  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  )
}

export default QuotePdf;