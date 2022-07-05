import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import EditTodo from '../EditForm/component';

const List = ({ list, onDelete, onStatusChange, editTodo }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const onEditSubmit = (e) => {
    e.preventDefault();
    editTodo(todoEditing, editingText);
    setEditingText('');
    setTodoEditing(null);
  };

  return (
    <>
      <div className="edit__form">
        <EditTodo
          onEditSubmit={onEditSubmit}
          setEditingText={setEditingText}
          editingText={editingText}
          todoEditing={todoEditing}
        />
      </div>
      <div className="main">
        {list.map((el) => (
          <div key={nanoid()} className="flex__wrapper">
            <div
              className={el.status ? 'list done' : 'list'}
              onClick={() => onStatusChange(el.id)}
            >
              {el.title}
            </div>
            <span>
              <button
                disabled={todoEditing ? true : false}
                className={
                  todoEditing ? 'deleteBtn editBtn__disabled' : 'deleteBtn'
                }
                onClick={() => onDelete(el.id)}
              >
                Delete
              </button>
              <button className="editBtn" onClick={() => setTodoEditing(el.id)}>
                Edit
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
