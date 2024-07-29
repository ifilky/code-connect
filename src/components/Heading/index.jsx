import styles from './heading.module.css'

export const Heading = ({ children }) => {
    return (
        <h2 className={styles.heading} >{children}</h2>
    )
}

export default Heading;