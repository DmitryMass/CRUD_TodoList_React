import React, { useEffect, useState } from 'react';
import { create, deleteTodo, getTodoList, update } from '../Api/component';

const useTodo = (defaultList) => {
  const [list, setList] = useState(defaultList ? defaultList : '');

  useEffect(() => {
    async function effect() {
      const res = await getTodoList();
      setList(res);
    }
    effect();
  }, []);

  const addTodo = async (message) => {
    const todo = { title: message };

    const newTodo = await create(todo);

    setList([...list, newTodo]);
  };

  const deleteCurrentTodo = async (id) => {
    try {
      await deleteTodo(id);

      const newList = list.filter((el) => el.id !== id);
      setList(newList);
    } catch (e) {
      console.log(e);
    }
  };

  const changeStatus = async (id) => {
    const currentTodo = list.find((todo) => todo.id === id);
    const updatedTodo = {
      ...currentTodo,
      status: !currentTodo.status,
    };

    try {
      await update(id, updatedTodo);
      const newList = list.map((todo) => (todo.id === id ? updatedTodo : todo));

      setList(newList);
    } catch (e) {
      console.log(e);
    }
  };

  const editTodo = async (id, editText) => {
    const updatedTodo = list.find((todo) => todo.id === id);
    const currentTodo = {
      ...updatedTodo,
      title: editText,
    };

    try {
      await update(id, currentTodo);
      const newList = list.map((todo) => (todo.id === id ? currentTodo : todo));
      setList(newList);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    list,
    addTodo,
    deleteCurrentTodo,
    changeStatus,
    editTodo,
  };
};

export default useTodo;
