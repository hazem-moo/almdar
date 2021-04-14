import React, { useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    
    return (
        <footer className='footer'>
            <div className='container text-center'>
                <div className='row'>
                    <div className="col-lg-4">
                        <div>
                            <Link
                                onClick={ () => window.scrollTo(0, 0) }
                                exact to='/'
                                className='my-link'
                            >
                                الرئيسية
                            </Link>
                            <Link
                                onClick={ () => window.scrollTo(0, 0) }
                                exact to='/Political'
                                className='my-link'
                            >
                                سياسية
                            </Link>
                            <Link
                                onClick={ () => window.scrollTo(0, 0) }
                                exact to='/Art'
                                className='my-link'
                            >
                                فن
                            </Link>
                            <Link
                                onClick={ () => window.scrollTo(0, 0) }
                                exact to='/Sport'
                                className='my-link'
                            >
                                رياضة
                            </Link>
                           </div>
                    </div> 
                    <div className='col-lg-4'>
                        <div className='my-form text-left'>
                            <input 
                                type='text'
                                placeholder='type your name' 
                                autoFocus autoComplete="on" required
                            />
                                
                                
                            <input 
                                type='email' placeholder='type your mail'
                                autoComplete="off" required 
                            />
                                
                                
                            <textarea 
                                
                                placeholder="your massage" >
                            </textarea>

                            <Link to='https://mail.google.com/mail/u/0/#inbox'
                                    className='send mx-auto'> ارسال </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer