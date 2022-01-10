import React, { createContext, useState } from "react";
import { getImage } from '../services/api';

export const userInformationContext = createContext();

export const UserInformationProvider = ( {children} ) => {

  const [userImage, setUserImage] = useState('');
  const [percentHabits, setPercentHabits] = useState(0); 

  const image = (email, password) => {
    const promise = getImage(email,password);
    
    promise.then(response => { 
      console.log("function image: ", response.data.image);
      setUserImage(response.data.image);
    });
  
    promise.catch( () => {
      console.log("Houve um erro");
    });
  }
  //console.log('userImage: ', userImage);

  return (
    <userInformationContext.Provider value= { { image, userImage, percentHabits, setPercentHabits } }>
    {children}
    </userInformationContext.Provider>
  );
}
