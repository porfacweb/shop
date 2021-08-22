import React, { useState, useEffect } from 'react'
import { Card, Button,Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from './Product'



function Home() {
  const [ProductInfo, setProductInfo] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/GetProductAll').then(result => {
      console.log(result)
      let response = result.data
      setProductInfo(response)
    })
  }, [])



  return (
    <div style={{ height: "80vh"}}>
      <Row>
              {ProductInfo.map((product) => (
        <Col xl={3} lg={4} md={4} sm={6} xs={12} key={product.id} style={{marginTop:"30px"}}>
          <Product product={product}/>
        </Col>
      ))}
      </Row>


    </div>
  )
}

export default Home
