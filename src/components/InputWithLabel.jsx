import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
console.log('children', children);
console.log('typeof', typeof(children));
console.log('todotitle', todoTitle);

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

InputWithLabel.propTypes = {
todoTitle: PropTypes.string,
handleTitleChange: PropTypes.func.isRequired,
// children: PropTypes.oneOfType([PropTypes.string])
children: PropTypes.string
// children: PropTypes.node.isRequired
}

export default InputWithLabel;
