const questions = [
  {
    text: "What is the primary purpose of React?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "user interface framework", isCorrect: true },
      { id: 2, text: "Database management", isCorrect: false },
      { id: 3, text: "Network communication", isCorrect: false },
    ],
  },

  {
    text: "In React, what is a state?",
    options: [
      { id: 0, text: " A function", isCorrect: false },
      { id: 1, text: "An object that holds data", isCorrect:  true },
      { id: 2, text: " A built-in method", isCorrect:  false },
      { id: 3, text: "A CSS property", isCorrect:  false },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect:  true },
      { id: 1, text: "Java Syntax Extension", isCorrect: false },
      { id: 2, text: "JSON Extension", isCorrect:  false },
      { id: 3, text: "JavaScript and XML", isCorrect:  false },
    ],
  },
  
  {
    text: "What is the purpose of React Router?",
    options: [
      { id: 0, text: "State management", isCorrect: false },
      { id: 1, text: "Client-side routing", isCorrect:  true },
      { id: 2, text: "Server-side rendering", isCorrect:  false },
      { id: 3, text: "Database integration", isCorrect:  false },
    ],
  },
  {
    text: "How can you pass data from a parent component to a child component in React?",
    options: [
      { id: 0, text: " Using props", isCorrect: true },
      { id: 1, text: "Using state", isCorrect:  false },
      { id: 2, text: "Using Redux", isCorrect:  false },
      { id: 3, text: "Using context", isCorrect:  false },
    ],
  },
  {
    text: "What is the significance of the virtual DOM in React?",
    options: [
      { id: 0, text: "It speeds up server-side rendering", isCorrect: false },
      { id: 1, text: "It directly manipulates the browser's DOM", isCorrect:  false },
      { id: 2, text: "It improves performance by minimizing DOM updates", isCorrect:  true },
      { id: 3, text: "It handles database operations", isCorrect:  false },
    ],
  },
  {
    text: "What lifecycle method is invoked after a component has been rendered in React?",
    options: [
      { id: 0, text: "componentDidMount", isCorrect: true },
      { id: 1, text: "componentDidUpdate", isCorrect:  false },
      { id: 2, text: "componentWillMount", isCorrect:  false },
      { id: 3, text: "componentWillUnmount", isCorrect:  false },
    ],
  },
  {
    text: "What is the purpose of React Hooks?",
    options: [
      { id: 0, text: "To create class components", isCorrect: false },
      { id: 1, text: "To handle asynchronous operations", isCorrect:  false },
      { id: 2, text: "To add logic to functional components", isCorrect:  true },
      { id: 3, text: "To manage browser history", isCorrect:  false },
    ],
  },
  {
    text: "How can you prevent the default behavior of a form submission in React?",
    options: [
      { id: 0, text: "Using event.stopPropagation()", isCorrect: false },
      { id: 1, text: "Using event.preventDefault()", isCorrect:  true },
      { id: 2, text: "Using event.stopImmediatePropagation()", isCorrect:  false },
      { id: 3, text: " Using event.defaultPrevented()", isCorrect:  false },
    ],
  },
  {
    text: "What is the purpose of the useEffect hook in React?",
    options: [
      { id: 0, text: "To manage component state", isCorrect: false },
      { id: 1, text: "To perform side effects in functional components", isCorrect:  true },
      { id: 2, text: "To create event listeners", isCorrect:  false },
      { id: 3, text: "To handle HTTP requests", isCorrect:  false },
    ],
  },
  {
    text: "What is Redux in the context of React?",
    options: [
      { id: 0, text: "A styling library", isCorrect: false },
      { id: 1, text: "A state management library", isCorrect:  true },
      { id: 2, text: " A routing library", isCorrect:  false },
      { id: 3, text: "A testing library", isCorrect:  false },
    ],
  },
  {
    text: "How can you conditionally render content in React?",
    options: [
      { id: 0, text: "Using the if statement", isCorrect: false },
      { id: 1, text: "Using the switch statement", isCorrect:  false },
      { id: 2, text: "Using the render method", isCorrect:  false },
      { id: 3, text: "Using the ternary operator", isCorrect:  true },
    ],
  },
  {
    text: "What is the purpose of the map function in React?",
    options: [
      { id: 0, text: "To iterate over an array and return a new array", isCorrect: true },
      { id: 1, text: "To create a map component", isCorrect:  false },
      { id: 2, text: "To render a list of components", isCorrect:  false },
      { id: 3, text: "To manipulate the DOM directly", isCorrect:  false },
    ],
  },
  {
    text: "How can you update the state of a component in React?",
    options: [
      { id: 0, text: "Directly modifying the state object", isCorrect: false },
      { id: 1, text: "Using the setState method", isCorrect:  true },
      { id: 2, text: "Using the state keyword", isCorrect:  false },
      { id: 3, text: "Assigning a new value to this.state", isCorrect:  false },
    ],
  },
  {
    text: "What is the purpose of the key prop in React lists?",
    options: [
      { id: 0, text: "To identify elements in the DOM", isCorrect: true },
      { id: 1, text: "To set the background color of elements", isCorrect:  false },
      { id: 2, text: "To define component keys", isCorrect:  false },
      { id: 3, text: "To handle keyboard events in components", isCorrect:  false },
    ],
  },
];

export default questions;