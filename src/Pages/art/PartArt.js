import React from 'react'
import { Card, CardImg, CardText } from 'reactstrap'
import { DataArt } from '../../Data/DataArt'
import { Link } from 'react-router-dom'
import './art.css'

const PartArt = () => {
    const minArt = DataArt.map( ( { src, title, link }, idx ) => {
        return (
            <div className='col-lg-4' key={ idx } >
                <Card
                    tag={ Link } to={ link }
                    onClick={ () => window.scrollTo(0,0) }
                    className="post"
                >
                    <CardImg top src={ src } alt='' className="post-img" />
                    <CardText className='post-p' > { title } </CardText>
                </Card>
            </div>
        )
    })
    return (
        <section className='art'>
            <div className="row">
                { minArt }
            </div>
        </section>
    )
}

export default PartArt
