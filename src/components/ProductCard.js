import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import watch1 from '../images/watch-1.jpg'
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation();

    return (
        <>

            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${location.pathname == '/' ? '/product/:id' : location.pathname == '/product/:id' ? '/product/:id' : ':id'}`}
                    className='product-card position-relative'>


                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={watch} className='img-fluid' alt='product image' />
                        <img src={watch1} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havells</h6>
                        <h5 className='product-title'>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className='price'>$100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${location.pathname == '/' ? '/product/:id' : location.pathname == '/product/:id' ? '/product/:id' : ':id'}`}
                    className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={watch} className='img-fluid' alt='product image' />
                        <img src={watch1} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havells</h6>
                        <h5 className='product-title'>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className='price'>$100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
