import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="h-screen w-full font-semibold text-gray-700 text-center p-4 "
    >
      <h1 className="text-4xl text-orange-700 p-4 mt-10">Oops!</h1>
      <p className="text-2xl p-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl p-2">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
