import {ReactComponent as Resetpasscoul} from '../assets/Resetpasscoul.svg';
import {ReactComponent as Onlinestudy} from '../assets/Onlinestudy.svg';
import Logo from '../images/logo.svg'
export const ResetPasswordPage = ()=> {
  return (
    <div className='flex cover2 bg-left-top'>
        <div className='w-1/2 md:flex hidden h-screen'>
          <Onlinestudy className='w-5/6' />
        </div>
        <div className='md:w-1/2 w-full h-screen flex justify-center items-center flex-col'>
            <div>
              <img src={Logo}/>
            </div>
            <div className='pt-12'>
              <p className='text-3xl font-bold'>Reset Password</p>
            </div>
            <form className='flex justify-center items-center flex-col'>
              <div className='pt-10'>
                <input type='password' placeholder='New Password' className='border p-3 w-[300px] rounded-3xl pl-7' />
              </div>
              <div className='pt-6'>
                <input type='password' placeholder='Confirm Password' className='border p-3 w-[300px] rounded-3xl pl-7' />
              </div>
              <div className='pt-10'>
                <button className='border p-3 w-[300px] rounded-3xl bg-[#2594FA] text-white font-semibold'>
                  Reset
                </button>
              </div>
             
            </form>
        </div>
    </div>
  )
}