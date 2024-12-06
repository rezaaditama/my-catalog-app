import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className=' shadow-2xl w-4/5 p-6 rounded-md md:w-1/3'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-blue-700'>Login</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-5'>
          <Input
            label={'Username'}
            id={'username'}
            type={'input'}
            placeholder={'Enter your username'}
            required={'required'}
          />
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            placeholder={'Enter your username'}
            required={'required'}
          />
          <Button className={'w-full py-2'}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
