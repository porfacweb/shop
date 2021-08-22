import React from 'react'

function Rating({ratingValue,color}) {
    return (
        <div>
            <span><i style={{color:color}} className={ratingValue>1? "fas fa-star":ratingValue>0.5? "fas fa-star-half-alt":"far fa-star"}></i></span>
            <span><i style={{color:color}} className={ratingValue>2? "fas fa-star":ratingValue>1.5? "fas fa-star-half-alt":"far fa-star"}></i></span>
            <span><i style={{color:color}} className={ratingValue>3? "fas fa-star":ratingValue>2.5? "fas fa-star-half-alt":"far fa-star"}></i></span>
            <span><i style={{color:color}} className={ratingValue>4? "fas fa-star":ratingValue>3.5? "fas fa-star-half-alt":"far fa-star"}></i></span>
            <span><i style={{color:color}} className={ratingValue>5? "fas fa-star":ratingValue>4.5? "fas fa-star-half-alt":"far fa-star"}></i></span>
        </div>
    )
}

export default Rating
