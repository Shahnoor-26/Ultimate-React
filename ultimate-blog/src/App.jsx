import React from 'react'
import {configure} from "./config/config.js"

const App = () => {
  console.log(configure.appwriteURL);
  console.log(configure.appwriteProjectID);
  console.log(configure.appwriteDatabaseID);
  console.log(configure.appwriteCollectionID);
  console.log(configure.appwriteBucketID);
  
  
  
  return (
    <div>Hello Ultimate Blog </div>
  )
}

export default App