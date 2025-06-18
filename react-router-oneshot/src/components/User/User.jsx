import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <div className="h-auto w-full p-4 bg-slate-200">
      <h1 className="p-4 text-4xl text-center text-orange-700 font-semibold ">
        user-id: {userId}
      </h1>
    </div>
  );
};

export default User;
