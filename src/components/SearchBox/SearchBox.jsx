import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onFilter }) => {
  return (
    <div className={css.filterInput}>
      <p>Find contacts by name</p>
      <input className={css.input}
        value={inputValue}
        onChange={(event) => onFilter(event.target.value)}
          />
              
    </div>
  );
};

export default SearchBox;