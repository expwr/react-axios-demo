import styles from "./ProductCard.module.css";

const ProductCard = ({
  title,
  description,
  image,
  rating,
  category,
  price
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <span className={styles.rating}>
            {rating.rate} Stars ({rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
