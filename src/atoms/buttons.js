import React from 'react';

export function ArrowButton(props) {
  return (
    <button className="arrow" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export function CreateButton(props) {
  return (
    <button className="create" onClick={props.onClick}>
      create
    </button>
  );
}