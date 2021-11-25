import React from "react";
import { styles } from "./styles";
//import { Select } from 'antd';
import { UserContext } from "../Context";

const Receiver = (props) => {
  const defaultAddress = "boa1456fjknd12345345908nnn1324234";
  

  const [userData,setUserData]=React.useContext(UserContext)
  
  const [userInput,setUserInput]=React.useState('')

  const [selectedItemList,setSelectedItemList]=React.useState([])
  const [listofAddress, setListofAddress] = React.useState(["boa1456fjknd12345345908nnn1324234"]);

 
const handleChange=(val)=>{
  setSelectedItemList([...selectedItemList,val])
  setUserData({...userData,  address:selectedItemList,
 
    })

}
React.useEffect(()=>{

},[userData,userInput])


return (
    <div style={styles.container}>
      <p style={styles.heading}>Receiver</p>
      <div style={styles.rowing}>
      <div>

        <label style={styles.labelStyling}>Address</label><br/>
        <select mode={'multiple'} style={{width:250}} onChange={handleChange}>
        {listofAddress?.map((item, index) => {
            return (
              <option key={index} value={item} >
                {item}
              </option>
            );
          })}
     
    </select>
   
     
      </div>
      <div>
        <label style={styles.labelStyling}>Amount (don't use commas for now):</label><br/>
          <input style={styles.input} type="number" onChange={(e)=>{
            setUserInput(e.target.value.toString())
            setUserData({...userData,  
              amount:e.target.value.toString(),
              })
            
            }}/>
        </div>
        <div></div>
        </div>
      </div>
    );
};

export default Receiver;
