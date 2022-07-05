import React from 'react';

const EditTodo = ({
  onEditSubmit,
  setEditingText,
  editingText,
  todoEditing,
}) => {
  return (
    <form onSubmit={onEditSubmit}>
      <div className="edit__block">
        <input
          type="text"
          onChange={(e) => setEditingText(e.target.value)}
          value={editingText}
          placeholder="Change Edited Todo"
          className={
            todoEditing ? 'editInput inputActive' : 'editInput inputDisabled'
          }
          disabled={todoEditing ? false : true}
        />
        <button
          disabled={todoEditing ? false : true}
          className={todoEditing ? 'editBtn' : 'editBtn editBtn__disabled'}
          id="editBtn"
          type="submit"
        >
          Edit &#10004;
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
