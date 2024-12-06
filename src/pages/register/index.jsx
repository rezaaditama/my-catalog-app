import Input from '../../components/Input';
import Button from '../../components/Button';

const RegisterPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className=' shadow-2xl w-4/5 p-6 rounded-md md:w-1/3'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-blue-700'>Register</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-3'>
          <Input
            label={'Fullname'}
            id={'fullname'}
            type={'text'}
            placeholder={'Enter your name'}
            required={true}
          />
          <Input
            label={'Email'}
            id={'email'}
            type={'email'}
            placeholder={'Enter your email'}
            required={true}
          />
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            placeholder={'Enter your password'}
            required={true}
          />
          <Input
            label={'Verify Password'}
            id={'verifyPassword'}
            type={'password'}
            placeholder={'Verify your password'}
            required={true}
          />

          <Button className={'w-full py-2'}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
