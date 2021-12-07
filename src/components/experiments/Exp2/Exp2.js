import React, { useState } from 'react';

const Exp2 = () => {
  const [input, setInput] = useState('');
  const [json, setJson] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setJson(input);
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Submit</button>
      </form>
      <Test json={json} />
    </>
  );
};

const Test = ({ json }) => {
  return <div>{json}</div>;
};

export default Exp2;
