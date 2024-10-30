import Button from './components/Button';
import Input from './components/Input';
import Form from './components/Form';

const App = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Form className='shadow-2xl px-10 py-9 space-y-2 rounded' action={''}>
        <div className=''>
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
        </div>
      </Form>
    </div>
  );
};

export default App;
