import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import styles from "../pagination/Pagination.module.css";

const Pagination = ({ page, handleChangePage, totalPages }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={() => handleChangePage("minus")}>
        <FaAngleLeft />
      </button>
      <span>{page} / {totalPages}</span>
      <button className={styles.btn} onClick={() => handleChangePage("plus")}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
