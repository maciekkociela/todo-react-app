import React from 'react';

const NewToDoForm = (props) => (
    <div>
      <input type="text" onChange={props.onChange} value={props.draft} />
      <button onClick={props.onSubmit}>Add ToDo</button>
    </div>
)

export default NewToDoForm;