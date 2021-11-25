
export  const ConvertToNormal=(numberToBeConverted)=>{
    let nmbr=parseFloat(numberToBeConverted).toFixed(11)
    let pointLoc=nmbr.indexOf('.')
    let numb=nmbr.replace('.','')
   return (numb,pointLoc)
    
}

export  const AddTwoNumers=(numberOne,numberTwo)=>{
 
    let firstnum= parseFloat(numberOne).toFixed(11)
    let secondnum=parseFloat(numberTwo).toFixed(11)
    let pointLoc=firstnum.indexOf('.')
    let numb=firstnum.replace('.','')
  
   let spointLoc=secondnum.indexOf('.')
    let snumb=secondnum.replace('.','')


 let ans=parseInt(numb)+parseInt(snumb)
 let result=''
 if(pointLoc>spointLoc){
  result = ans.toString().slice(0, pointLoc) + '.' + ans.toString().slice(pointLoc);
  console.log('point loc'+pointLoc)}
  else{
    result = ans.toString().slice(0, spointLoc) + '.' + ans.toString().slice(spointLoc);
    console.log('not'+spointLoc)
  }
 return result;
}

export  const SubtractTwoNumber=(numberOne,numberTwo)=>{
    let firstnum= parseFloat(numberOne).toFixed(11)
    let secondnum=parseFloat(numberTwo).toFixed(11)
    let pointLoc=firstnum.indexOf('.')
    let numb=firstnum.replace('.','')
  
   let spointLoc=secondnum.indexOf('.')
    let snumb=secondnum.replace('.','')


 let ans=parseInt(numb)-parseInt(snumb)
 let result=''
 if(pointLoc>spointLoc){
  result = ans.toString().slice(0, pointLoc) + '.' + ans.toString().slice(pointLoc);
  console.log('point loc'+pointLoc)}
  else{
    result = ans.toString().slice(0, spointLoc) + '.' + ans.toString().slice(spointLoc);
    console.log('not'+spointLoc)
  }
 return result;

    
}




