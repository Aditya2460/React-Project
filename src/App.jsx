import Display from './Components/Display'
import Item from './Components/Item'
import styles from './App.module.css'
import Center from './Components/Center';
import { useState } from 'react';

function App() {
  const [calval,setcalval]=useState("");
  const buttonclicked=(item)=>{
    if(item==='C'){
      setcalval("");
    }
    else if(item==='='){
        const val=eval(calval);
        setcalval(val)
    }
    else{
    const newitem=calval+item;
    setcalval(newitem);
  }
  }

  return <Center>
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <Item buttonclicked={buttonclicked}></Item>
    </div>
    </Center>
}

export default App;
