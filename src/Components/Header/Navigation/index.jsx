import { useState } from 'react';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const  Navigation = ()=>{

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleSidebar = () => {
        setisopenSidebarVal((isOpen) => !isOpen);
        setActiveSubmenu(null);
    };

    const toggleSubmenu = (category) => {
        setActiveSubmenu((activeCategory) =>
            activeCategory === category ? null : category
        );
    };
    return(
  <nav>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-sm-3 navPart1'>
                            <div className='catWrapper'>
                                <Button
                                    className='allCatTab align-items-center'
                                    onClick={toggleSidebar}
                                    aria-expanded={isopenSidebarVal}
                                >
                                <span className='icon1'><IoIosMenu/></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2'><FaAngleDown/></span>
                             </Button>

                             <div className={`sidebarNav ${isopenSidebarVal ? 'open' : ''}`}>
                        
                        <ul>
                            <li className={activeSubmenu === "men" ? "active" : ""}>
                                <Button
                                    onClick={() => toggleSubmenu("men")}
                                    aria-expanded={activeSubmenu === "men"}
                                >
                                    men <FaAngleRight className='ml-auto'/>
                                </Button>
                                <div className="submenu">
                                    {/* Updated Links */}
                                    <Link to="/shop"><Button>clothing</Button></Link>
                                    <Link to="/shop"><Button>footwear</Button></Link>
                                    <Link to="/product/1"><Button>watches</Button></Link>
                                       </div>
                            </li>
                                   <li className={activeSubmenu === "women" ? "active" : ""}>
                                        <Button
                                            onClick={() => toggleSubmenu("women")}
                                            aria-expanded={activeSubmenu === "women"}
                                        >
                                            women <FaAngleRight className='ml-auto'/>
                                        </Button>
                                        <div className="submenu">
                                            {/* Updated Links */}
                                            <Link to="/shop"><Button>clothing</Button></Link>
                                            <Link to="/shop"><Button>footwear</Button></Link>
                                            <Link to="/product/2"><Button>watches</Button></Link>
                                        </div>
                                   </li>
                                    {/* Updated Links */}
                                    <li><Link to="/shop"><Button>beauty</Button></Link></li>
                                   <li> <Link to="/shop"><Button>watches</Button></Link></li>
                                   <li> <Link to="/shop"><Button>kids</Button></Link></li>
                                    <li><Link to="/shop"><Button>gifts</Button></Link></li>
                                     <li> <Link to="/shop"><Button>men</Button></Link></li>
                                   <li> <Link to="/shop"><Button>women</Button></Link></li>
                                    <li><Link to="/shop"><Button>beauty</Button></Link></li>
                                   <li> <Link to="/shop"><Button>watches</Button></Link></li>
                                   <li> <Link to="/shop"><Button>kids</Button></Link></li>
                                    <li><Link to="/shop"><Button>gifts</Button></Link></li>
                         </ul>
                             </div>
                            </div>
                        </div>

                        <div className='col-sm-9 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ms-auto '>
                                      <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                              
                                <li className="list-inline-item">
                                  {/* Updated Link */}
                                  <Link to="/shop">
                                   <Button>Men</Button>
                                    </Link>
                                <div className='submenu shadow'>
                                    <Link to="/shop"><Button>clothing</Button></Link>
                                    <Link to="/shop"><Button>footwear</Button></Link>
                                    <Link to="/product/1"><Button>watches</Button></Link>
                                     </div> 
                                </li>
                                <li className='list-inline-item'>
                                {/* Updated Link */}
                                <Link to="/shop">
                                <Button>women</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/shop"><Button>clothing</Button></Link>
                                    <Link to="/shop"><Button>footwear</Button></Link>
                                    <Link to="/product/2"><Button>watches</Button></Link>
                                     </div>
                                </li>
                                <li className='list-inline-item'>
                                {/* Updated Link */}
                                <Link to="/shop">
                                <Button>beauty</Button></Link>
                                   <div className='submenu shadow'>
                                    <Link to="/shop"><Button>clothing</Button></Link>
                                    <Link to="/shop"><Button>footwear</Button></Link>
                                    <Link to="/shop"><Button>watches</Button></Link>
                                     </div>
                                </li>
                                <li className='list-inline-item'>
                                {/* Updated Link */}
                                <Link to="/shop">
                                <Button>watches</Button></Link>
                                   <div className='submenu shadow'>
                                    <Link to="/shop"><Button>clothing</Button></Link>
                                    <Link to="/shop"><Button>footwear</Button></Link>
                                    <Link to="/shop"><Button>watches</Button></Link>
                                     </div>
                                </li>
                                <li className='list-inline-item'><Link to="/shop"><Button>kids</Button></Link></li>
                                   <li className='list-inline-item'><Link to="/shop"><Button>gifts</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Contact</Button> </Link></li>
                            </ul>
                    
                        </div>

                        </div>
                    </div>
                </nav>
           
    )
}
export default Navigation;
