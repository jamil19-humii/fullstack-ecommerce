import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props,ref)
  {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown=()=>{

    const[isOpenModal, setIsOpenModal]=useState(false);
    return(
        <>
             <Button className='countryDrop' onClick={()=>setIsOpenModal(true)} >
                <div className='info d-flex flex-column'>
                     <span className='label'>Your Location</span>
                        <span className='name'>India</span>
                </div>
                <span className='ms-auto'><FaAngleDown/></span>
            </Button>
              
             
<Dialog
  open={isOpenModal}
  onClose={() => setIsOpenModal(false)}
  className="locationModal"
>
                   <h4 className='mb-0'><b>Choose your Delivery Location</b></h4>
                   <p>Enter your address and we will specify the offer for your area.</p>
                    <Button className='close_' onClick={()=>setIsOpenModal(false)} aria-label="Close dialog" > <IoClose/></Button>
                  
                      <div className='headerSearch   w-100'>
                        <input type='text' placeholder='Search your area...'/>
                       <Button>< IoIosSearch /></Button> 
                      </div>
                         
                         <ul className='countryList'>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                              <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button> onClick={()=>setIsOpenModal(false)}Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Kenya</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
                             <li><Button onClick={()=>setIsOpenModal(false)}>Saudi Arabia</Button></li>
                        </ul>
                  </Dialog>
        </>
    )

}

export default CountryDropdown;