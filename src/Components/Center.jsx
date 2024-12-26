import styles from "./Container.module.css"
const Center=(props)=>{
    return <div className={styles.container}>{props.children}</div>
}
export default Center;