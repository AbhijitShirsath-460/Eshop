import React from 'react'
import "./home.css"
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Home() {

        

    //  let valueProducts = document.getElementsByClassName('.products').value.toLowercase();
    //    let searchbox = document.getElementsByClassName('.searchProduct').value.toLowercase();

    //    if(valueProducts.includes(searchbox)){

                  
    //    }
    
     
     



    return (
        <>

            <h1 id='print'></h1>

            <nav className='navbar'>

                <div className='navdiv'>

                    <div className='logo'>
                        <h3>upgradEshop</h3>
                    </div>

                    <ul>


                        <label htmlFor="sort">

                            <select name="sort" id="sort">

                                <option value="default">default</option>
                                <option value="lowest">price(lowest)</option>
                                <option value="#" disabled></option>
                                <option value="heighest">price(heighest)</option>
                                <option value="#" disabled></option>
                                <option value="newest">price(newest)</option>
                            </select>

                        </label>



                        <Link to='/Home'><li>Home</li> </Link>
                        <Link to='/Products'><li>Products</li></Link>
                        <input type="search" name="search" className="searchProduct" placeholder='search' />
                        <Link to={'/'}><button id='logout'>LogOut</button></Link>
                        <FiShoppingCart className='totalnumberaddcart' />
                        <span className='numbers'>0</span>


                    </ul>

                </div>
            </nav>

            {/* Home Page products */}


            <div className='productContianer'>

                <div className='products' id= '1'>


                    <Link> <img src="https://m.media-amazon.com/images/I/61x-6-ZiTLL._SL1000_.jpg" className='images' alt="" />
                        <h3 className='title'>Style Guide</h3>
                        <h6 className='author'>  by The Economist</h6>
                        <h6 className='price'>price :1603 </h6>
                        <button className='btn'>Buy Now</button>
                    </Link>

                </div>

                <div className='products' id= '2'>


                    <Link> <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'>The Psychology Of Money</h3>
                        <h6 className='author'> by Morgan Housel</h6>
                        <h6 className='price'> price :266</h6>
                        <button className='btn'>Buy Now</button>


                    </Link>

                </div>


                <div className='products' id= '3'>


                    <Link>  <img src="https://m.media-amazon.com/images/I/81VAEnfqo4L._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'>Startup Compass : How Iconic Entrepreneurs <br />
                            Got It Right</h3>
                        <h6 className='author'> by Ujwal Kalra , Shobhit Shubhankar</h6>
                        <h6 className='price'>price :310</h6>
                        <button className='btn'>Buy Now</button>

                    </Link>

                </div>
                <div className='products' id= '4'>


                    <Link>  <img src="https://m.media-amazon.com/images/I/81JByBEqw+S._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'>The Power of A Positive Attitude</h3>
                        <h6 className='author'>  by Roger Fritz</h6>
                        <h6 className='price'>price :100</h6>
                        <button className='btn'>Buy Now</button>


                    </Link>

                </div>

                <div className='products' id= '5'>

                    <Link>
                        <img src="https://m.media-amazon.com/images/I/71UwSHSZRnS._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'> The Power of Your Subconscious Mind</h3>
                        <h6 className='author'>   by Joseph Murphy </h6>
                        <h6 className='price'> price :100</h6>
                        <button className='btn'>Buy Now</button>


                    </Link>


                </div>

                <div className='products' id= '6'>

                    <Link>
                        <img src="https://m.media-amazon.com/images/I/71gpkRk86eS._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'> Think & Grow Rich </h3>
                        <h6 className='author'>   by Napoleon Hill  </h6>
                        <h6 className='price'>price :119</h6>
                        <button className='btn'>Buy Now</button>

                    </Link>

                </div>


                <div className='products' id= '7'>

                    <Link>
                        <img src="https://m.media-amazon.com/images/I/91msEbTletL._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'> Shrimad Bhagwat Geeta Yatharoop </h3>
                        <h6 className='author'>   by  A.C. Bhaktivendanta Swami Prabhupada </h6>
                        <h6 className='price'>price :280</h6>
                        <button className='btn'>Buy Now</button>

                    </Link>

                </div>



                <div className='products' id='8'>

                    <Link>
                        <img src="https://m.media-amazon.com/images/I/918G9WKcfpL._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'> Knowledge Encyclopedia Our Planet Earth </h3>
                        <h6 className='author'>   by   Wonder House Books </h6>
                        <h6 className='price'>price :599</h6>
                        <button className='btn'>Buy Now</button>

                    </Link>

                </div>


                <div className='products'id= '9'>

                    <Link>

                        <img src="https://m.media-amazon.com/images/I/716Y+6fLj0L._SL1500_.jpg" className='images' alt="" />
                        <h3 className='title'> The MSing Link</h3>
                        <h6 className='author'>   by   Dr. Gretchen Hawley  </h6>
                        <h6 className='price'>price :822</h6>



                    </Link>
                    <button className='btn'>Buy Now</button>

                </div>


            </div>












        </>
    )
}
