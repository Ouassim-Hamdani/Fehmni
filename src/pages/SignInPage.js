import axios from "axios"
import {ReactComponent as Crayon} from '../assets/Crayon.svg';
import {ReactComponent as Google} from '../assets/Google.svg';
import Blurry  from '../components/Blurry';
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import { Fragment } from 'react';
export const SignInPage = () => {
    let GoogleIdClient = "711397336280-v80u9bntebl2e305pvqhet5drtcpbmpu.apps.googleusercontent.com";
    const login = async (username, password) => {
            console.log(username,password)
            const response = await (await axios.post('http://127.0.0.1:8000/api/login/', {username:username,password:password}))
            .then((res)=>{
                const resp =  res;
            }).catch((err)=>{
                console.log(err)
            })
    
        }
    const [userData, setUserData] = useState(null);

        const responseGoogle = async (response) => {
        
          const tokenId = response.tokenId;
          console.log(response)
          const userData = await axios.post('http://localhost:8000/accounts/login/', {
            access_token: tokenId,
          });
          setUserData(userData.data);
          console.log(userData)
        };
    const baseURL = "http://localhost:8000";
    const [showBlurry, setShowBlurry] = useState(false)
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const handleChangeEmail = event => {
        setEmail(event.target.value);
        console.log(email)
    }
    const handleChangePassword = event => {
        setPass(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const resp = login(email,pass)
        console.log(resp);
    }

  return (
    <GoogleOAuthProvider clientId="711397336280-v80u9bntebl2e305pvqhet5drtcpbmpu.apps.googleusercontent.com">

    <Fragment>
        <div className='flex cover bg-gray-100'>
            <div className='md:w-1/2 w-full h-screen flex flex-col justify-center items-center'>
                <div>
                    <p className='text-3xl font-semibold'>Welcome Back</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                    <div className='pt-8'>
                        <input type='text' required onChange={handleChangeEmail} placeholder='Your Email' className='border rounded-3xl p-2.5 pl-5 w-[300px]'/>
                    </div>
                    <div className='pt-6'>
                        <input type='password' required onChange={handleChangePassword} placeholder='Your Password' className='border rounded-3xl p-2.5 pl-5 w-[300px]'/>
                    </div>
                    <div className='pt-8'>
                        <button type='submit'  className='border rounded-3xl p-2.5 w-[300px] bg-[#2594FA] text-white'>
                            Sign in
                        </button>
                    </div>
                </form>
                <div className='pt-6 '>
                <GoogleLogin className="border flex rounded-3xl bg-white p-2.5 w-[300px] text-[#2594FA] justify-center font-semibold" onSuccess={credentialResponse => {  console.log(credentialResponse);}} onError={() => {console.log('Login Failed');}}/>                            

                    </div>
                    <div className='pt-3' onClick={() => setShowBlurry(true)}>
                        <p className='text-[#2594FA] cursor-pointer'>Forget your password?</p>
                    </div>
            </div>
            <div className='w-1/2 h-screen md:flex hidden'>
                <div className='flex justify-center items-center'>
                    <Crayon className='w-[500px] h-[600px]'/>
                </div>
            </div>   
        </div>
        <Blurry isVisible={showBlurry} onClose={() => setShowBlurry(false)}>

        </Blurry>

        

        

    </Fragment>
    </GoogleOAuthProvider>

    
  );

}