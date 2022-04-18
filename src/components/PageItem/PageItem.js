import { useNavigate } from "react-router-dom"
import styles from "./PageItem.module.css"

const PageItem = ({ pageItem }) => {
  const navigate = useNavigate()

  return (
    <div 
      className={ styles['page-item'] }
      onClick={ () => navigate(`/${ pageItem.collection }/${ pageItem.id }`) }
    >
      <img 
        className={ styles['item-image'] } 
        src={ pageItem.image } 
        alt={ pageItem.title } 
      />

      <div className={ styles['item-caption'] }>
        <p className="author">
          { pageItem.author }
        </p>

        <p className={ styles.title }>
          { pageItem.title }
        </p>
      </div>
    </div>
  )
}

export { PageItem } 
