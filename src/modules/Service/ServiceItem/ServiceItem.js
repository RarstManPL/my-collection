import { useNavigate } from "react-router-dom"
import { useCollection } from "@hooks"

import styles from "./ServiceItem.module.css"

export const ServiceItem = (props) => {
  const { serviceItem, redirect = false } = props
  const navigate = useNavigate()
  const { deleteDocument } = useCollection(serviceItem.collection)

  const handleDelete = () => {
    deleteDocument(serviceItem.id)

    if (redirect) 
      navigate(`/${serviceItem.collection}`)
  }

  return (
    <div
      className={styles["service-item"]}
      
    >
      <div className="controls">
        <p onClick={handleDelete}>Usun</p>
        <p onClick={() => navigate(`/${serviceItem.collection}/edit/${serviceItem.id}`)}>Edytuj</p>
      </div>
      <div className={styles["image-container"]}>
        <img
          className={styles["item-image"]}
          src={serviceItem.cover}
          alt={serviceItem.title}
        />
      </div>

      <div className={styles["item-caption"]}>
        <p className="author">
          {serviceItem.author ? serviceItem.author : serviceItem.year}
        </p>

        <p className={styles.title}>
          {serviceItem.title}
        </p>
      </div>
    </div>
  )
}
