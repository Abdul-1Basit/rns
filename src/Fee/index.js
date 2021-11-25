import React from "react";
import { styles } from "./styles";
import { UserContext } from "../Context";
import { Select } from 'antd';

const { Option } = Select;
const Fee = (props) => {
  const [userData,setUserData]=React.useContext(UserContext)
  const defaultOption = "Medium";
  const [defaultFee,setDefaultFee]=React.useState(2.52)
  const [selectedItem,setSelectedItem]=React.useState('boa1456fjknd12345345908nnn1324234')
  const [listofOptions, setListofOption] = React.useState(['Medium']);
const amountChange=(e)=>{

    setDefaultFee(e.target.value)
    setUserData({...userData, fee:e.target.value})
}
const handleChange=(e)=>{
    setSelectedItem(e.target.value)
}

  return (
    <div style={styles.container}>
      <h3>Fee</h3>
      <div style={styles.rowing}>
      <div>

        <label style={styles.labelStyling}>Option</label><br/>
         <select defaultValue={defaultOption} style={{ width: 120 }} onChange={handleChange}>
      
    
    
          {listofOptions?.map((item, index) => {
            return (
              <option value={item} selected={true}>
                {item}
              </option>
            );
          })}
        </select>

     
      </div>
      <div>
        <label style={styles.labelStyling}>Fee</label><br/>
          <input style={styles.input} defaultValue="2.52" type={'number'} onChange={amountChange}/>
        </div>
        <div></div>
        </div>
      </div>
    );
};

export default Fee;
