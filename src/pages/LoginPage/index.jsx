import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Form className='shadow-2xl px-10 py-9 space-y-2 rounded' action={''}>
        <div className='text-center'>
          <h1 className='text-blue-700 font-bold text-2xl'>Login</h1>
          <p className='text-slate-500 font-bold text-sm'>
            Welcome,please enter your details
          </p>
        </div>
        <div className='space-y-2'>
          <Input
            id={'username'}
            placeholder={'Enter username'}
            label={'Username'}
            className={'w-full'}
          />
          <Input
            id={'password'}
            placeholder={'Enter Password'}
            label={'Password'}
            className={'w-full'}
          />
          <Button className={'w-full bg-blue-700 text-white'} type={'submit'}>
            Login
          </Button>
          <div className='text-center'>
            <h1>
              don't have an account?{' '}
              <Link className='text-blue-700 font-bold' to={'/register'}>
                Sign Up
              </Link>{' '}
            </h1>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
