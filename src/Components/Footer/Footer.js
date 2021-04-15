import React, { useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const focusRef = useRef()
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
                        <form className='my-form text-left'>
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
                        </form>
                    </div>

                    <div className="col-lg-4">
                        <div className="infor">
                            <div className='social'>
                                <Link to="#" >
                                    <i className='fab fa-2x fa-facebook'></i>
                                </Link>
                                <Link to='#'>
                                    <i className='fab fa-2x fa-linkedin '></i>
                                </Link>
                                <Link to='#'>
                                    <i className='fab fa-2x fa-youtube '></i>
                                </Link>
                                <Link to='#'>
                                    <i className='fab fa-2x fa-instagram '></i>
                                </Link>
                                <Link to='#'>
                                    <i className='fab fa-2x fa-twitter '></i>
                                </Link>
                            </div>
                        </div>
                        <form className='search'>
                            <input ref={ focusRef } type='search' className='w-100' />
                            <i className='fas fa-search' onClick={ () => focusRef.current.focus() } ></i>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer