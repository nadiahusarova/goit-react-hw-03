import s from './SearchBox.module.css';

const SearchBox = ({ onSearch }) => {
  const handleChange = e => {
    const { value } = e.target;

    onSearch(value);
  };

  return (
    <div>
      <label className={s.label}>
        <span>Find contact by name:</span>
        <input
          onChange={handleChange}
          type="text"
          name="search"
          className={s.input}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;