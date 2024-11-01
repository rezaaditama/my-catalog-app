import { Link } from 'react-router-dom';

const AuthLayout = ({ children, type }) => {
  return (
    <>
      {type === 'register' ? (
        <div className='shadow-2xl px-10 py-9 space-y-2 rounded'>
          <div className='text-center'>
            <h1 className='text-blue-700 font-bold text-2xl'>Register</h1>
            <p className='text-slate-500 font-bold text-sm'>
              Welcome, please enter your details
            </p>
          </div>
          {children}
          <div className='text-center'>
            <h1>
              Have an account?{' '}
              <Link className='text-blue-700 font-bold' to={'/login'}>
                Sign In
              </Link>
            </h1>
          </div>
        </div>
      ) : (
        <div className='shadow-2xl px-10 py-9 space-y-2 rounded'>
          <div className='text-center'>
            <h1 className='text-blue-700 font-bold text-2xl'>Login</h1>
            <p className='text-slate-500 font-bold text-sm'>
              Welcome,please enter your details
            </p>
          </div>
          {children}
          <div className='text-center'>
            <h1>
              Don't have an account?{' '}
              <Link className='text-blue-700 font-bold' to={'/register'}>
                Sign Up
              </Link>{' '}
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
