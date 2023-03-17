import "./Info.css"
import styles from "./Info.module.css"

console.log(styles)

function Info() {
    return (
        <div className={styles.info}>
            <h1>hi from me</h1>
            <h2>aaaaaaaaaaaaaassssssssssss</h2>
            <button className="my-button">touch me</button>
            <button className={styles.myOtherButton}>quite</button>
        </div>
    )
}

export default Info;