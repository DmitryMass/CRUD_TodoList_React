import React from 'react';
import useTodo from '../CustomHook/component';
import Form from '../Form/component';
import List from '../List/component';

const Todo = ({ defaultMessage, defaultList }) => {
  const {
    list,
    addTodo,
    deleteCurrentTodo,
    changeStatus,
    updateTodo,
    editTodo,
  } = useTodo(defaultList);

  return (
    <div className="wrapper">
      <Form
        defaultMessage={defaultMessage}
        onSubmit={(message) => addTodo(message)}
        onChangeTodo={updateTodo}
      />
      <List
        onDelete={deleteCurrentTodo}
        list={list}
        onStatusChange={changeStatus}
        editTodo={editTodo}
      />
    </div>
  );
};
export default Todo;
