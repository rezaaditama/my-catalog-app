import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import AuthLayout from '../../components/AuthLayout';

const RegisterPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <AuthLayout type={'register'}>
        <Form action={''}>
          <div className='space-y-2'>
            <Input
              id={'fullname'}
              placeholder={'Enter Fullname'}
              label={'Fullname'}
              className={'w-full'}
            />
            <Input
              id={'email'}
              placeholder={'Enter Email'}
              label={'Email'}
              className={'w-full'}
            />
            <Input
              id={'password'}
              placeholder={'Enter Password'}
              label={'Password'}
              className={'w-full'}
            />
            <Input
              id={'confirmPassword'}
              placeholder={'Enter Confirm Password'}
              label={'Confirm Password'}
              className={'w-full'}
            />
            <Button className={'w-full bg-blue-700 text-white'} type={'submit'}>
              Register
            </Button>
          </div>
        </Form>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
