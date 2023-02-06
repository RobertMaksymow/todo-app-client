interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <>
      <form className="input" onSubmit={handleAddTodo}>
        <input
          className="input__box"
          type="input"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="What needs to be done?"
        />
        <button className="input_submitButton" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default InputField;
