import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props,ref)
  {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown=()=>{


    const[isOpenModal, setIsOpenModal]=useState(false);
    const[selectedTab, setselectedTab]=useState(null);

   
    const [searchTerm, setSearchTerm] = useState("");
    

    const context = useContext(MyContext);

    const selectCountry=(index, country)=>{
      setselectedTab(index);
      setIsOpenModal(false); 
      context.setselectedCountry(country)
    }
    
   

  
     
    const filterList = (e) => {
      setSearchTerm(e.target.value.toLowerCase());
    };

     const filteredCountries = context.countryList?.filter((item) =>
      item.country.toLowerCase().includes(searchTerm)
    );

       return(
      <>
             <Button className='countryDrop' onClick={()=>setIsOpenModal(true)} >
                <div className='info d-flex flex-column'>
                     <span className='label'>Your Location</span>
                        <span className='name'>{context.selectedCountry!==""? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+ '...': context.selectedCountry : 'Select Location'}</span>
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
                       
                        <input
                         type="text"
                           placeholder="Search your area..."
                          onChange={filterList}
                         />

                       <Button>< IoIosSearch /></Button> 
                      </div>
                         
                         <ul className="countryList mt-3">
                            {filteredCountries?.map((item, index) => (
                          <li key={index}>
                          <Button
                          onClick={() => selectCountry(index,item.country)}
                          className={selectedTab === index ? "active" : ""}
                          >
                         {item.country}
                          </Button>
                          </li>
                          ))}
                        </ul>

                          
                  </Dialog>
     
        </> 
  );
}  



export default CountryDropdown;