import Display from "./Display";
import Item from "./Item";
import styles from './App.module.css'
const Buttoncontainer=()=>{
    const items=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','00'];
    return <><div className={styles.calculator}>
    <Display></Display>
    <Item items={items}></Item>
  </div>
    
    </>
}
export default Buttoncontainer;