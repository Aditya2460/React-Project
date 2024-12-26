import styles from './display.module.css'
const Display=({displayvalue})=>{
    return <input type="text" className={styles.display} placeholder="0" value={displayvalue} readOnly />
}
export default Display;