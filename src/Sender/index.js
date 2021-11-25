import React from "react"
import { styles } from "./styles";
import {BankOutlined} from '@ant-design/icons'
import { Button } from "antd";
const Sender=(props)=>{
    const [senderList,setSenderList]=React.useState([{address:'acdefgh',drawn:'60,999,976',remaining:'60,999,976',spendable:'60,999,976',balance:'',action:''}])
    
    return(
        <div style={styles.container}>
<div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'space-between'}}>
    <div>
<h3>Sender</h3>
    </div>
    
    <div>
        
    <Button type="primary" onClick={()=>{props.calculate()}}>Add Sender</Button>
   
    </div>
</div>

<div>
<table style={styles.tableWidth}>
  <tr style={styles.tableHeading}>
  <th>Address</th>
  <th>Drawan</th>
  <th>Remaining</th>
  <th>Spendable Balance</th>
  <th>Balance</th>


  </tr>
  {senderList?.map((item,index)=>{
      let bagColor=(index%2!==0)?'#f5f5f5':'#fff'
      return(
          
  <tr key={index}  style={{backgroundColor:bagColor}}>
      <td style={{alignItems:'center',justifyContent:'center',textAlign:'center',color:'blue',display:'flex',flex:1,flexDirection:'row'}}><div style={{marginRight:10,width:25,height:25,borderRadius:12.5,backgroundColor:'#004f9e',alignItems:'center',justifyContent:'center',display:'flex'}}><BankOutlined  style={{color:'#FFF'}}/></div>
  {item.address}</td>
  <td style={styles.trstyle}>{item.drawn}</td>
  <td style={styles.trstyle}>{item.remaining}</td>
  <td style={styles.trstyle}>{item.spendable}</td>
  <td style={styles.trstyle}>{item.balance}</td>
</tr>
      )
  })
  }
</table>
</div>
        </div>
    )
}
export default Sender;