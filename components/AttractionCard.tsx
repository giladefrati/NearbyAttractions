import React from 'react'

type Props = {
    name: string,
    types: string[],
    number_of_reviews: number,
    rating: number,

    imgURL?: string,
    titleSize?: string,
    titleColor?: string
}

//An exapmle of style using object (for more readable code)
const cardStyle: React.CSSProperties = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '25em',
    marginRight: '2em',
    marginBottom: '2em',
    minHeight: '42em',
    
}

const AttractionCard = ({ name,
    rating,
    number_of_reviews,
    types,
    imgURL,
    titleColor,
    titleSize
}: Props) => {
    return <>
        <div style={cardStyle}>
            <img
                alt="attraction"
                src={imgURL}
                style={{ objectFit: 'cover', height: '25em', width: "100%" }}
            />
            <div style={{ fontSize: '2em',padding:'0.7em' }}>
                <h4 style={{
                    padding: '2px 16px',
                    color: titleColor ? titleColor : 'black',
                    fontSize: titleSize ? titleSize : '2em'
                }}
                >
                    <b>{name}</b></h4>
                <p style={{ fontSize: '0.8em' }}>Rating: {rating}   |   {number_of_reviews} Reviews</p>
                <p style={{ color: 'grey', fontSize: '0.7em' }}>{types.join(', ')} </p>
            </div>
        </div>
    </>
}
export default AttractionCard