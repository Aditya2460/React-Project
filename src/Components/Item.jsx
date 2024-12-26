import Button from "./Button";
import styles from './button.module.css'
const Item=({buttonclicked})=>{
    const items=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','00'];
    return <>
    <div className={styles.key1}>
        {items.map((item)=><Button key={item} item={item} buttonclicked={buttonclicked} ></Button>)}
      </div>
    </>
}
export default Item;