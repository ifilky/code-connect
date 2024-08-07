import { Button } from "../Button"

import styles from './searchform.module.css'

export const SearchForm = () => {
    return (
        <form className={styles.form} action="/">
            <input
                name="q"
                placeholder="Digite o que você procura"
                className={styles.input}
            />
            <Button type="submit">Buscar</Button>
        </form>
    )
}