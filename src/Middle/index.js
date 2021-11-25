
import Receiver from '../Receiver';
import Fee from '../Fee';
import Sender from '../Sender';
import React from 'react';
import { UserContext } from '../Context';
import {AddTwoNumers,SubtractTwoNumber} from '../Converter'

export const MiddleComponent=()=>{
  
    const [userData,setUserData]=React.useContext(UserContext)
    const calculate=()=>{
  console.log(userData.fee)
    let ans=AddTwoNumers(userData.amount,userData.fee);
    let result=SubtractTwoNumber(ans,userData.balance)
    console.log(result)
    }
    
    React.useEffect(()=>{
//console.log(JSON.stringify(userData))
    },[userData])
    return(
    <>
      <Receiver/>
     <Fee/>
     <Sender calculate={calculate}/>
      </>
    )
  }
  