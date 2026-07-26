import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import Services from "../../Components/Services";
import PromoBanners from '../../Components/PromoBanners';
import HomeProducts from "../../Components/HomeProducts";


const Home=()=>{
    return(
        <>
      
                  <HomeBanner/>
                  <Services/>
                  <PromoBanners />
                  <HomeProducts/>

                <section className="homeProducts">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          

                      </div>
                    </div>
                 </div>
                </section>
        </>
    )

}
export default Home;
