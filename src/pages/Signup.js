import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title='Forgot Password' />
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Create Account</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput type='type' name='name' placeholder='First name' />
                <CustomInput type='text' name='Last name' placeholder='Last name' />
                <CustomInput type='email' name='email' placeholder='Email' />
                <CustomInput type='password' name='password' placeholder='Password' />
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button className='button border-0'>Sign Up</button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup
