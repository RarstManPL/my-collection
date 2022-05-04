import { useNavigate } from "react-router-dom"

import { faPenToSquare, faBan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useCollection } from "@hooks"

import empty from "@assets/empty.jpg"
import styles from "./ServiceItem.module.css"

export const ServiceItem = (props) => {
  const { serviceItem, controls = true, redirect = false } = props
  const navigate = useNavigate()
  const { deleteDocument } = useCollection(serviceItem.collection)

  const handleDelete = () => {
    deleteDocument(serviceItem.id)

    if (redirect)
      navigate(`/${serviceItem.collection}`)
  }

  const handleDetails = () => {
    if (controls)
      navigate(`/${serviceItem.collection}/${serviceItem.id}`)
  }

  const loadDefault = (e) => {
    e.target.src = empty
  }

  return (
    <div className={styles["service-item"]}>
      <div className={styles["image-container"]}>
        <img
          className={styles["item-image"]}
          src={serviceItem.cover}
          alt={serviceItem.title}
          onError={loadDefault}
        />

        {controls && (
          <div className={styles.controls}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => navigate(`/${serviceItem.collection}/edit/${serviceItem.id}`)}
            />
            <FontAwesomeIcon
              icon={faBan}
              onClick={handleDelete}
            />
          </div>
        )}
      </div>

      <div
        className={styles["item-caption"]}
        onClick={handleDetails}
      >
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
