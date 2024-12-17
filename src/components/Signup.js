import React ,{useState}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    // we add three states for form submission 
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

// a function section to handle form submit 
const handleSubmit = async(e) =>{
    e.preventDefault()
    // we are going to use multipart form data 
    // formdata is a inbuilt javascript object, used to construct a set of key value pairs 
    // we append the values to the objects 
    const formdata = new FormData()
    formdata.append("username",username)
    formdata.append("email",email)
    formdata.append("phone",phone)
    formdata.append("password",password)

//  console.log("formdata",formdata)
try {
    setLoading(true)
    const response =await axios.post("http://susan99.pythonanywhere.com/api/signup",formdata)
    // we check for 200 states code 
    if (response?.status=== 200){
        setLoading(false)
        setSuccess(response?.data?.message)

        // you need to reset the form inputs to be empty 
    }
} catch (error) {
    setLoading(false)
    setError(error?.message)
    
}


}

    return (  
        <div className="App">
            <h2>sign up</h2>
            {Loading &&  <p className='text-warning'>Loading...</p>}
            {error && <p className='text-danger'> {error}  </p>}
            {success && <p className='text-success'> {success} </p>}

            {/* todo */}
            <div className="card shadow p-4">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} value={username}/><br />
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value ={email} /><br />
                    <input type="number" className="form-control" placeholder="Enter Your Phone Number" onChange={(e) =>setPhone(e.target.value)} value ={phone}/><br />
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) =>setPassword(e.target.value)} value ={password} /><br />
                    <button type="submit" className="btn btn-primary">signup</button>
                </form>
                {/* add a link to go to sign in  */}
                <Link to ="/signin">Already have an account?,Login</Link>
                {/* {username} <br />
                {email} <br />
                {phone} <br />
                {password} */}

            </div>
        </div>
    );
}
 
export default Signup;