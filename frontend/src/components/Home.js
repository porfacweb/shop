import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'



function Home() {
  const [Product, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/GetProductAll').then(result => {
      console.log(result)
      let response = result.data
      setProduct(response)
    })
  }, [])



  return (
    <div style={{ height: "80vh" }}>
      {Product.map((product) => (
        <Card style={{ width: '18rem' }} key={product.id}>
          <Card.Img variant="top" src="../../../media/3.jpg" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Title>{product.ProductName}</Card.Title>
            <Card.Text>
              {product.ProductDiscription}
            </Card.Text>
            <h6>{product.ProductDiscount}</h6>
            <h6>{product.ProductPrice}</h6>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  )
}

export default Home
