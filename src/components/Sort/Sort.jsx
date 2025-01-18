const SortComponent = ({ options, onSortChange }) => {
  return (
    <div>
      <label>Sort By:</label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortComponent;
