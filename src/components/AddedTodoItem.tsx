import React from 'react';

type Props = {
  title: string;
};

export const AddedTodoItem: React.FC<Props> = React.memo(
  ({ title }) => {
    return (
      <div data-cy="Todo" className="todo">
        <label className="todo__status-label" htmlFor="todoStatus">
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
            defaultChecked
            id="todoStatus"
          />
        </label>

        <span data-cy="TodoTitle" className="todo__title">{title}</span>
        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDeleteButton"
        >
          ×
        </button>

        <div data-cy="TodoLoader" className="modal overlay is-active">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div>
    );
  },
);
