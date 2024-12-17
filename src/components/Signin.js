import React,{useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // define 3 states of form submission
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // you need to invoke the use navigate hook 
    const navigate = useNavigate()
    
    
    // function to handle form submit 
    const handleSubmit = async (e) =>{
        e.preventDefault()
        // we need the form data object 
        const formdata = new FormData()
        formdata.append("email",email)
        formdata.append("password",password)

        try {
            setLoading(true)
            const response =await axios.post("http://modcom2.pythonanywhere.com/api/signin",formdata)
            if(response?.status === 200 && response?.data?.user){
                // we save the user to local storage 
                // we direct the user to dashboard or homepage
                setLoading(true)
                navigate('/getland')

            }else{
                setLoading(false)
                setError("Login Failed")
            }
        } catch (error) {
            setLoading(false)
            setError(error?.message)
            
        }
    }
    

    return ( 
        <div className="App">
            <h1 className="text-success">Sign in</h1>
            {error && <p className='alert alert-danger'> {error}  </p>}
            {loading && <p className='text-warning'>Loading...please wait</p>}
            {/* to do */}
            <div className="card shadow p-5">
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" className="form-control" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    <input type="password" className="form-control" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/><br />
                    <button className="btn btn-primary" type="submit">Signin</button>
                </form>
                {/* {email}
                {password} */}
                {/* a link to go to signup  */}
                <Link to ="/signup">Dont have an account</Link>
            </div>
        </div>
     );
}
 
export default Signin;