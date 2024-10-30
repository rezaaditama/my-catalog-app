import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='min-h-screen flex justify-center items-center flex-col space-y-4'>
      <h1 className='text-3xl font-bold'>Oops!</h1>
      <p className=' text-xl'>Sorry, an unexpected error has occured</p>
      <p className='text-base'>{error.statusText || error.status}</p>
    </div>
  );
};

export default ErrorPage;
