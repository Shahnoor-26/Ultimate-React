import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // // Method 1
  // const [data, updateData] = useState(0);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/shahnoor-26")
  //     .then((response) => response.json())
  //     .then((data) => updateData(data));
  // }, []);

  // Method 2
  const data = useLoaderData();

  return (
    <div className="h-auto w-full p-4 bg-slate-200">
      <h1 className="p-4 text-4xl text-center text-orange-700 font-semibold ">
        Github Followers: {data.followers}
      </h1>
      <img src={data.avatar_url} alt="avatar" className="mx-auto" />
    </div>
  );
};

export default Github;

// Method 2
export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/shahnoor-26");
  return response.json();
};
