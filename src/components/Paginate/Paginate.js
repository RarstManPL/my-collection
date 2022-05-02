import ReactPaginate from "react-paginate"
import styles from "./Paginate.module.css"

export const Paginate = (props) => {
  const { ...rest } = props

  return (
    <ReactPaginate
      containerClassName={styles.pagination}
      pageClassName={styles["pagination-option"]}
      breakClassName={styles["pagination-option"]}
      nextClassName={styles["pagination-option"]}
      previousClassName={styles["pagination-option"]}
      pageLinkClassName={styles["option-link"]}
      breakLinkClassName={styles["option-link"]}
      activeClassName={styles["option-checked"]}
      previousLinkClassName={styles["nav-link"]}
      nextLinkClassName={styles["nav-link"]}
      nextLabel="⯈"
      previousLabel="⯇"
      breakLabel="..."
      pageRangeDisplayed={5}
      renderOnZeroPageCount={null}
      {...rest}
    />
  )
} 
