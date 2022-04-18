import { PageItem } from "../PageItem/PageItem"
import { Bars } from "react-loader-spinner"
import styles from "./PageItemsList.module.css"

const PageItemsList = ({snapshot: {documents, ready, error, controls: {optionsCheck}}, category }) => {
  const isReady = ready && !(optionsCheck.null && optionsCheck.queries)
  const documents_ = documents && (category
    ? documents.filter(document => document.category === category) 
    : documents)

  return (
    <div className={ styles['page-items'] }>
      { error && <div>{ error }</div> }
      { isReady
          ? (
            <>
              { (!documents_ || documents_.length < 1) && <div>Brak elementów do załadowania...</div> }
              { documents_ && documents_.map(item => <PageItem pageItem={ item } key={ item.id } /> ) }
            </>
          )
          : <Bars color="#00BFFF" height={80} width={80} />
      }
    </div>
  )
}

export { PageItemsList }