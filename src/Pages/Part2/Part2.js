import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText } from 'reactstrap'
import './Part2.css'
import {minSport} from '../../Data/Data'


const Part2 = () => {
    const sport = minSport.map( ({ src, link, title }, idx) => {
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
        <section className='part2'>
            <div className='row'>
                { sport }
            </div>
            
        </section>
    )
}

export default Part2
