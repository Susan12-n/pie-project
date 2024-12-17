import React, { useState, } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addland = () => {
const [location, setLocation] = useState("");
const [landcost, setLandcost] = useState("");
const [landsize, setLandsize] = useState("");
const [landowner, setLandowner] = useState("");
const [plotno, setPlotno] = useState("");
const [landdescription, setLanddescription] = useState("");
const [landphoto, setLandphoto] = useState("");

const navigate =useNavigate()

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);

// handle form submission 
const handleSubmit = async (e)=>{
    e.preventDefault()

    // creat a form data object 
    const formdata =new FormData()
    formdata.append("land_description",landdescription)
    formdata.append("land_location",location)
    formdata.append("land_cost",landcost)
    formdata.append("land_size",landsize)
    formdata.append("land_owner",landowner)
    formdata.append("plot_no",plotno)
    formdata.append("land_photo",landphoto)


try {
    setLoading(true)
    const response = await axios.post("http://modcom2.pythonanywhere.com/api/add_land",formdata)
    if(response?.status === 200){
        setLoading(false)
        setSuccess(response?.data?.success)
     
        navigate("/getland")

    }    
    
} catch (error) {
        setLoading(false)
        setError(error?.message)


    
}





}


    return ( 
        <div className="App">
            <h1>add land</h1>

            {loading &&  <p className='text-warning'>Loading...</p>}
            {error && <p className='text-danger'> {error}  </p>}
            {success && <p className='text-success'> {success} </p>}

            <div className="card shadow p-5">
                <form action=""  onSubmit={handleSubmit}>
                    <h5>Upload Land</h5>
                    <input type="text" className="form-control" placeholder="Land location" value={location} onChange={(e)=>setLocation(e.target.value)} /><br />
                    <input type="number" className="form-control"  placeholder="Land Cost" value={landcost} onChange={(e)=>setLandcost(e.target.value)}/> <br />
                    <input type="text" className="form-control" placeholder="Landsize" value={landsize} onChange={(e)=>setLandsize(e.target.value)}/> <br />
                    <input type="text" className="form-control" placeholder="Land Owner" onChange={(e)=>setLandowner(e.target.value)}/> <br />
                    <input type="text" className="form-control" placeholder="Plot number" onChange={(e)=>setPlotno(e.target.value)}/> <br />
                    {/* <input type="text" className="form-control" accept='image/*' placeholder="Land photo" onChange={(e)=>setLandphoto(e.target.value)}/> <br /> */}

                    <textarea name="" id="" placeholder="Land Description" onChange={(e)=>setLanddescription(e.target.value)}></textarea> <br />
                    <h3>Upload Land photo</h3>
                    <input type="file" className="form-control" accept="image/*" onChange={(e)=>{
                        const file= e.target.files[0]
                        // check if the file exist
                        if(file){
                            setLandphoto(file)
                        }
                    }} /> <br />
                    <button type="submit" className="btn btn-primary">Add Land</button>

                </form>
             {/* {location}
             {landcost}
             {landowner}
             {plotno}
             {landsize}
             {landphoto}
             {landdescription} */}

            </div>

            {/* to do */}

        </div>
     );
}
 
export default Addland;