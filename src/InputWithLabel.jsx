import { useEffect, useRef } from "react";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">
        {children}
      </label>
      <input
        ref={inputRef}
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
