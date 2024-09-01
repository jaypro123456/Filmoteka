import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleClick }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          className={styles.search}
          placeholder="Найти чо глянуть"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.btn}>
          <FaSearch className={styles.icon} />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
