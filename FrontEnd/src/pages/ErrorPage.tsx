import { useRouteError } from "react-router";

const ErrorPage = () =>{
  console.log('d?')
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}

export default ErrorPage 