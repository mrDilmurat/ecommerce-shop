import React from 'react';
import newsletter from '../images/newsletter.png'

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src={newsletter} alt='newsLatter' />
                                <h2 className='mb-0 text-white'>Sign Up for News Latter</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-3'></footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Developer's Corner</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
