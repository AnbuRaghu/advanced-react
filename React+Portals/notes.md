React **Portals** provide a way to render components outside their normal DOM hierarchy while still preserving their functionality within the React component tree. This is especially useful for scenarios where you want to render a part of your application (e.g., modals, tooltips, or notifications) at a different location in the DOM, such as a top-level DOM node.

---

### Why Use React Portals?

In a typical React application, components are rendered within the DOM hierarchy of their parent components. However, this can be problematic in certain scenarios:
- Modals or dialogs need to overlay the entire UI, but rendering them within a deeply nested component could lead to CSS or z-index issues.
- Tooltips or dropdowns might need to escape their parent container to avoid being clipped.

Portals solve this problem by allowing components to render outside their normal parent hierarchy.

---

### How React Portals Work

Portals use the `ReactDOM.createPortal` method to render children into a different part of the DOM.

#### Syntax:

```javascript
ReactDOM.createPortal(child, container);
```

- **`child`**: The React component or elements you want to render.
- **`container`**: The DOM node where the child will be mounted.

---

### Example of a Portal

Here’s a simple example of using a portal to render a modal:

#### HTML Setup

Ensure your `index.html` (or equivalent) has a dedicated DOM node for portals:

```html
<div id="root"></div>
<div id="modal-root"></div>
```

#### React Code

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Render here
  );
};

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)}>This is a modal!</Modal>}
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
};

export default App;
```

#### How It Works:
1. The `Modal` component uses `ReactDOM.createPortal` to render its children into the `#modal-root` node.
2. Even though the modal is rendered outside the regular DOM hierarchy of the `App`, it remains part of React’s virtual DOM tree, meaning:
   - Event bubbling works as expected.
   - State and props are managed within the React component tree.

---

### Key Features of Portals

1. **Event Propagation**:
   - Portals maintain the event bubbling and propagation as if they were rendered inside the parent component. For example, clicking a button inside a portal still triggers events defined in ancestor components.

2. **Use Cases**:
   - Modals, dialogs, popups.
   - Tooltips or dropdowns.
   - Notifications or toast messages.

3. **Flexibility**:
   - You can use portals to break out of parent containers with restricted styles or overflow.

---

### When to Use Portals?

1. **Overlaying Content**:
   - Modals that need to overlay the rest of the UI.
2. **Clipping Issues**:
   - Dropdowns or tooltips that might be clipped by `overflow: hidden` or `overflow: scroll` styles on parent elements.
3. **Global Elements**:
   - Toasts or notifications that should appear at the top of the viewport, independent of the component tree.

---

### Advanced Example: Portal with Event Propagation Control

Sometimes, you want to prevent event propagation for clicks inside the portal (e.g., clicking inside a modal should not close it):

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div style={backdropStyle} onClick={handleBackdropClick}>
      <div style={modalStyle}>{children}</div>
    </div>,
    document.getElementById('modal-root')
  );
};

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h1>Portal with Controlled Propagation</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <p>This modal will not close when clicking inside it.</p>
        </Modal>
      )}
    </div>
  );
};

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
};

export default App;
```

Here, clicking on the backdrop (outside the modal) closes the modal, but clicks inside the modal do not propagate to the backdrop.

---

React Portals are a powerful tool for managing components that need to break out of their normal DOM hierarchy while staying connected to the React component tree. They enable you to solve layout and styling challenges in an elegant, declarative way.