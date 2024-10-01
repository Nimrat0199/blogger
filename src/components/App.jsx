import React, { useEffect, useState } from 'react';
import authService from './appwrite/auth';
import {Header, Footer} from './components/index';

const App = () => {
  
  const obj={
    email:"nimi@gmail.com",
    password:"1wewe2!23!@@#asddsd",
    name:"nimi"
  }

  const create=async()=>{
    await authService.logout();
    
    
  }

  return (
    <>
       <Header/>
       <Footer/>
    </>

  );
};

export default App;
