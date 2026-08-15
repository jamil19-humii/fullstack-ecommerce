import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useCart } from '../../CartContext'; // <-- Import the Cart Context

const Header = () => {
    const context = useContext(MyContext);
    const { cartCount, cartTotal } = useCart(); // <-- Get live count and total

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-3">
                            <Link to={'/'}><img src="/Images/logo.png" alt='Logo' /></Link>
                        </div>

                        <div className='col-sm-9 d-flex align-items-center part2'>
                            {
                                context.countryList.length !== 0 && <CountryDropdown />
                            }

                            <SearchBox />

                            <div className='part3 d-flex align-items-center ms-auto'>
                                <Button className='circle mr-3'><FiUser /></Button>
                                
                                {/* Wrapped the cartTab in a Link to /cart */}
                                <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        {/* Live Cart Total */}
                                        <span className='price'>${cartTotal.toFixed(2)}</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'><IoBagOutline /></Button>
                                            {/* Live Cart Count */}
                                            <span className='count d-flex align-items-center justify-content-center'>{cartCount}</span>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />

        </>
    )
}

export default Header;