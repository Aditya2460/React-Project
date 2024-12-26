import styles from'./button.module.css'
const Button=({item ,buttonclicked})=>{
    return<><button className={styles.keys} onClick={()=>buttonclicked(item)}>{item}</button></>
}
export default Button;