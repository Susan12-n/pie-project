import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Getland = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [land, setLand] = useState([]);

useEffect(()=>{
       try {
        setLoading(true)
        axios.get("http://modcom2.pythonanywhere.com/api/get_land_details")
        .then((response) =>{
            console.log("response",response?.data)
            setLand(response?.data)
            setLoading(false)
        })
        
       } catch (error) {
        setLoading(false)
        setError(error?.message)
       }

},[])
    // console.log(land)
 const imageUrl ="http://modcom2.pythonanywhere.com/static/images/"


    return ( 
        <div className="">
            {/* to do */}
            <div className="row">z
                {land?.slice(4).map((singleland) =>(

                <div className="col-md-3 p-5 ">
                    <div className="card shadow p-2">
                        <img src={imageUrl + singleland.land_photo}alt="" className='w-100' height ="200" />
                        <div className="card-body">
                            <h5 className="text-warning">
                                {singleland.land_location}
                            </h5>
                            <b className="text-info">{singleland.land_size}</b> <br />
                            <b className="text-primary">{singleland.land_description}</b> <br />
                            <button className='btn btn-primary'>pay Now</button>


                        </div>
                    </div>
                </div>
                ) )}
               
            </div>

        </div>
     );
}
 
export default Getland;
