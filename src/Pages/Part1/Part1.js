import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText } from 'reactstrap'
import Logo6 from "../../images/6.jpg"
import Logo7 from "../../images/7.jpg"
import Logo8 from "../../images/8.jpg"
import Logo9 from "../../images/9.jpg"
import Logo10 from "../../images/10.jpg"

import './Part1.css'

const Part1 = () => {
    return (
        <>
        <div className='container text-center part1' >
            <div className='row'>
                <div className="col-lg-4  ">
                    <Card 
                        tag={ Link } to="#" 
                        onClick={ () => window.scrollTo( 0, 0) } 
                        className='part1-post animate' 
                    >
                        <CardImg top width="100%" src={ Logo6 } alt='' className="part1-post-img" />
                        <p> تفاصيل الاجتماع الاول بين حفطر والجكومة الليبيه الجديده  </p>
                    </Card>
                </div>

                <div className='col-lg-8'>
                    <div className='row'>
                        
                        <div className="col-lg-6">
                            <Card to='#' tag={ Link }
                                onClick={ () => window.scrollTo( 0, 0) }
                                className=' part1-posting '
                            >
                                <CardImg top src={ Logo7 } alt='' className='w-50 post-img' />
                                <p > 
                                    لماذا طال امد الازمه السوريه  ؟ دبلوماسياوروبي يشرح الاسباب
                                </p>
                            </Card>
                        </div>
                        
                        <div className="col-lg-6">
                            <Card to='#' tag={ Link }
                                onClick={ () => window.scrollTo( 0, 0) }
                                className=' part1-posting animate'
                            >
                                <CardImg top src={ Logo8 } alt='' className='w-50 post-img' />
                                <p >
                                    وداعآ لزحمه السير مجمع سكني لاصحاب الطائرات فقط
                                </p>
                            </Card>
                        </div>
                        
                        <div className="col-lg-6">
                            <Card to='#' tag={ Link }
                                onClick={ () => window.scrollTo( 0, 0) }
                                className=' part1-posting animate'
                            >
                                <CardImg top src={ Logo9 } alt='' className='w-50 post-img' />
                                <p>
                                    مصادر : السراج يستعد لمغادره ليبيا ودعوات للتحقيق معه
                                </p>
                            </Card>
                        </div>
                        
                        <div className="col-lg-6">
                            <Card to='#' tag={ Link }
                                onClick={ () => window.scrollTo( 0, 0) }
                                className=' part1-posting animate'
                            >
                                <CardImg top src={ Logo9 } alt='' className='w-50 post-img' />
                                <p>
                                        مصادر : السراج يستعد لمغادره ليبيا ودعوات للتحقيق معه
                                </p>
                            </Card>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div className='part1-footer'></div>
        </>
    )
}

export default Part1
