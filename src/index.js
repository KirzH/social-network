import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let messages = [
  {message: "Hi", id: "0"},
  {message: "Good bye", id: "1"},
  {message: "Hello World", id: "2"},
  {message: "Hey, I'm Vadim", id: "3"},
  {message: "Good bye", id: "4"}
]

let dialogs = [
  {name: "Dmitry", id: "0"},
  {name: "Mikhail", id: "1"},
  {name: "Artyom", id: "2"},
  {name: "Ilya", id: "3"},
  {name: "Yulia", id: "4"},
]

ReactDOM.render(
    <App messages={messages} dialogs={dialogs} />,
  document.getElementById('root')
);

