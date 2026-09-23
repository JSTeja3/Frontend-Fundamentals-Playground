## DOM + Events

### Concepts Practiced
- DOM selection using `getElementById()`
- DOM creation using `createElement()`
- DOM insertion using `appendChild()`
- DOM removal using `remove()`
- Event handling using `addEventListener()`
- Event bubbling and `stopPropagation()`
- Event delegation
- `event.target` and `closest()`
- Arrays and objects
- Array methods: `push()`, `find()`, and `filter()`
- `dataset` and `data-*` attributes
- Updating the DOM based on application state

### Features
- Add tasks to a to-do list.
- Mark tasks as complete or incomplete.
- Delete tasks.
- Store task data in an array of objects.
- Render the task list dynamically from the array.
- Use event delegation to handle task completion and deletion.

### Key Learning
The tasks array acts as the source of truth for the UI.

When task data changes, `renderTasks()` rebuilds the displayed list from the updated array.

The array currently exists in JavaScript memory. Tasks are not persisted after a page refresh.