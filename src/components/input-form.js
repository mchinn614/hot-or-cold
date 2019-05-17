import React from "react";

export default function Input(props) {
  return (
    <form
      onChange={e => {
        props.onChange(e.target.value);
      }}
      onSubmit={e => {
        e.preventDefault();
        props.handleSubmit();
      }}
    >
      <label>
        Enter Guess:
        <input type="number" required min="1" max="100" step="1" />
      </label>
      <input type="submit" value="Guess" />
    </form>
  );
}
