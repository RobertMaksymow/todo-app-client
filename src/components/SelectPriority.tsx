function SelectPriority() {
  return (
    <span className="priority-selector">
      <select name="priority" id="priority-select">
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <label>priority_</label>
    </span>
  );
}

export default SelectPriority;
