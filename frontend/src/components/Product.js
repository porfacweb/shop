import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({ product }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Link to={`/ProductDetail/${product.id}`}>
                    <Card.Img variant="top" src='/../../../media/3.jpg' />
                </Link>

                <Card.Body>
                    <Card.Title>{product.ProductName}</Card.Title>
                    <Card.Text>
                        {product.ProductDiscription}
                    </Card.Text>
                    <h6>{product.ProductPrice}</h6>
                    <Button variant="primary">Go somewhere</Button>
                    <Rating ratingValue={product.ProductRating} color="Gold" />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
