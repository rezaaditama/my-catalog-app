import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import AuthLayout from '../../components/AuthLayout';

const LoginPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <AuthLayout type={'login'}>
        <Form action={''}>
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
          </div>
        </Form>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
