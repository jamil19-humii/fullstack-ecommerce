import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/logo.png';
import Button from '@mui/material/Button';

import CountryDropdown from '../CountryDropdown';
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";


const Header=()=>{
    return(
        <>
               <header className="header">
                  <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-3">
                            <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                         </div>

                         <div className='col-sm-9 d-flex align-items-center part2  ' >
                             <CountryDropdown/>

                             {/* Header Search Start Here */}
                                 <div className='headerSearch   ms-4 ms-auto me-3'>
                                    <input type='text' placeholder='Search for products...'/>
                                   <Button>< IoIosSearch /></Button> 
                                 </div>
                             {/*Header Search ends Here */}

                             <div className='part3 d-flex align-items-center  ms-auto '>
                               <Button className='circle mr-3'><FiUser/></Button>
                                <div className='ml-auto  cartTab d-flex align-items-center'>
                                    <span className='price'>$3.29</span>
                                     <div className='position-relative ml-2'>
                                           <Button className='circle'><IoBagOutline/></Button>
                                           <span className='count d-flex align-items-center justify-content-center'>1</span>
                                     </div>
                                

                                </div>
                             </div>
                          </div>
                    </div>
                  </div>
                </header>
           
        </>
    )

}
export default Header;