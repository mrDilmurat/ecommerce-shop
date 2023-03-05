import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const SingleProduct = () => {
    return (
        <>
            <Meta title={'Product Name'} />
            <BreadCrumb title='Product Name' />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
           
          </div>
        </div>
      </section>
            </div>
        </>
    )
}

export default SingleProduct
