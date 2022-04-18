import styles from "./PageTitle.module.css"

const PageTitle = ({ name }) => {
  return (
    <div className={styles['page-name']}>
      <b>MY</b>{name}
    </div>
  )
}

export { PageTitle }
