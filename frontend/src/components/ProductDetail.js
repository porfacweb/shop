import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'

function ProductDetail({ match }) {
    const [ProductInfo, setProductInfo] = useState('')
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/GetProductById/' + match.params.id).then((result) => {
            let response = result.data
            setProductInfo(response)
            console.log(ProductInfo.id + "Product info")
        })
    }, [])
    return (
        <div>
            <div className="col-xl-6">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{ProductInfo.ProductName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ProductInfo.ProductPrice}</Card.Subtitle>
                        <Card.Text>
                        {ProductInfo.ProductDiscription}
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <h1></h1>
                <h3></h3>
            </div>
            <div className="col-xl-6">

            </div>
        </div>
    )
}

export default ProductDetail
