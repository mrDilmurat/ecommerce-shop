import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineArrowLeft } from 'react-icons/ai';




const SingleBlog = () => {
    return (
        <>
            <Meta title={'Single Blog'} />
            <BreadCrumb title='Single Blog' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                    <AiOutlineArrowLeft className='fs-4' />Go back to Blogs</Link>
                                <h3 className='title'>
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img src='images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog' />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
