import React from 'react'
import './LogoHome.css'

import { Link } from 'react-router-dom'

import { Card, CardImg, CardBody, CardText } from 'reactstrap'

import Logo5 from '../../images/5.jpg'
import video from '../../images/0.mp4'

import Logo1 from '../../images/1.jpg'
import Logo2 from '../../images/2.jpg'
import Logo3 from '../../images/3.jpg'
import Logo4 from '../../images/4.jpg'

const LogoHome = () => {
  return (
    <div className="overlay-home ">
      <div className="row">

        <div className='col-lg-3'>
          <Card className='video'>
            <video controls className="vid"  height="300px" poster={ Logo5 } >
              <source  src={ video } type="video/mp4" /> 
            </video>
            <p> توصية عاجله الصجه العالمية بشأن لقاح استرازينيكا </p>
          </Card>
        </div>

        <div className='col-lg-2 col-md-6 mt-5 '>
          <Card tag={ Link } className="post" to="#" onClick={ () => window.scrollTo( 0, 0 ) } >
            <CardImg top width='100%' alt='' src={ Logo4 } />
            <CardBody  >
              <CardText tag='h6'> دبي للاحصاء : 38 % نسبة الاطفال في للامارات </CardText>
            </CardBody>
          </Card>
        </div>

        <div className='col-lg-2 col-md-6 mt-5 '>
          <Card tag={ Link } className="post" to="#" onClick={ () => window.scrollTo( 0, 0 ) } >
            <CardImg top width='100%' alt='' src={ Logo3 } />
            <CardBody  >
              <CardText tag='h6'> ما قصه الغقد الذي ارتدته ياسمين صبري </CardText>
            </CardBody>
          </Card>
        </div>

        <div className='col-lg-2 col-md-6 mt-5 '>
          <Card tag={ Link } className="post" to="#" onClick={ () => window.scrollTo( 0, 0 ) } >
            <CardImg top width='100%' alt='' src={ Logo2 } />
            <CardBody  >
              <CardText tag='h6'> هل يحصل محمد صلاح علي الجنسية الانجليزيه </CardText>
            </CardBody>
          </Card>
        </div>

        <div className='col-lg-2 col-md-6 mt-5 '>
          <Card tag={ Link } className="post" to="#" onClick={ () => window.scrollTo( 0, 0 ) } >
            <CardImg top width='100%' alt='' src={ Logo1 } />
            <CardBody  >
              <CardText tag='h6'> اصابه خطيره لقنان مصري شاب بسبب محمد رمضان </CardText>
            </CardBody>
          </Card>
        </div>

        <div className='col-lg-1 mt-5'>
          <div className='post-social'>
            <i className='fab fa-2x fa-facebook '></i>
            <i className='fab fa-2x fa-linkedin '></i>
            <i className='fab fa-2x fa-youtube '></i>
            <i className='fab fa-2x fa-instagram '></i>
            <i className='fab fa-2x fa-twitter '></i>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LogoHome