import './SSASS/Search.scss'
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'

function Search({data, setFilteredData, keyword, setKeyword}) {

  const [input, setInput] = useState()

  useEffect(() => {
    const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === 'string' && val.toLowerCase().includes(keyword.toLowerCase())));
    if(keyword === '') {
      setFilteredData(data);
    } else {
      setFilteredData(filtered);
    }
    console.log('Search Query:', filtered)
  }, [keyword])

  // const handleSearch = () => {
  //   const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === 'string' && val.includes(keyword)));
  // }

  const handleInputChange = (e) => {
    setKeyword(e.target.value)
    console.log('keyword', keyword)
  }

  return (
    <Container className='search-group'>
      <Form>
        <Row className='search-row'>
          <Form.Group className='boot-search-input' controlId='searchInput' as={Col} md={8}>
              <Form.Control name='search' placeholder='Search...' onChange={handleInputChange}/>
          </Form.Group>
          <Button className='search-btn'>
          <img className='searchimg' src='search.png'
              />
          </Button>
        </Row>
      </Form>
    </Container>
  )

}

export default Search