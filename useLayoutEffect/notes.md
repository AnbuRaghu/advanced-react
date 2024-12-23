In React, `useLayoutEffect` is a Hook that runs a function **synchronously** after the DOM has been updated but **before the browser paints the screen**. This makes it suitable for performing operations that require measuring DOM elements or manipulating the DOM directly, where timing is critical.

---

### Syntax

```javascript
useLayoutEffect(effect: () => void | (() => void), deps?: Array<any>);
```

- **`effect`**: The function that runs after the DOM has been updated.
  - It can return a cleanup function to clean up resources when the component unmounts or before the next render.
- **`deps`**: An array of dependencies that determine when the effect should run.

---

### How `useLayoutEffect` Works

The key difference between `useLayoutEffect` and `useEffect` lies in **when they run**:

1. **`useEffect`**:
   - Runs **after the browser paints** the screen.
   - Suitable for side effects that don’t block rendering, such as fetching data or setting timers.

2. **`useLayoutEffect`**:
   - Runs **before the browser paints** the screen but **after the DOM has been updated**.
   - Suitable for tasks that need to measure or mutate the DOM and ensure the updates are reflected before the user sees them.

---

### Example: Measuring DOM Elements

Consider a scenario where you need to measure the width of a `div` after it renders:

```jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

function Example() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  });

  return (
    <div>
      <div ref={divRef} style={{ width: '50%' }}>
        This is a resizable div.
      </div>
      <p>Width of the div: {width}px</p>
    </div>
  );
}

export default Example;
```

#### Explanation:
- The `divRef` reference points to the DOM element.
- `useLayoutEffect` runs synchronously after the `div` is rendered but before the browser paints. It calculates the `offsetWidth` and updates the state.

---

### Key Differences Between `useLayoutEffect` and `useEffect`

| Feature                  | `useEffect`                     | `useLayoutEffect`             |
|--------------------------|----------------------------------|--------------------------------|
| **Timing**               | Runs after the browser paints.  | Runs before the browser paints.|
| **Purpose**              | For non-blocking side effects.  | For DOM measurements/updates.  |
| **Rendering Impact**     | Doesn’t block the paint process.| Can block the paint process.   |

---

### When to Use `useLayoutEffect`

1. **Measuring the DOM**:
   - Use it when you need to measure DOM elements (e.g., width, height) right after rendering.
   
2. **Synchronous DOM Updates**:
   - Use it for side effects that modify the DOM and should complete before the browser paints the UI.
   
3. **Avoiding Flicker**:
   - Use it to avoid visual glitches caused by measuring/mutating the DOM in `useEffect` (e.g., ensuring animations start correctly).

---

### Example: Avoiding Visual Glitches

If you need to set a CSS property based on a DOM measurement, using `useEffect` may cause a brief visual flicker:

#### Problematic Example with `useEffect`:
```jsx
import React, { useEffect, useRef } from 'react';

function Example() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.color = 'red'; // Color update happens after paint
    }
  });

  return <div ref={divRef}>Hello, world!</div>;
}
```

- In this case, the color change happens **after** the paint, potentially causing a flicker.

#### Fixed Example with `useLayoutEffect`:
```jsx
import React, { useLayoutEffect, useRef } from 'react';

function Example() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.color = 'red'; // Color update happens before paint
    }
  });

  return <div ref={divRef}>Hello, world!</div>;
}
```

- Here, `useLayoutEffect` ensures the color is updated **before** the browser paints, eliminating flicker.

---

### Cleanup in `useLayoutEffect`

Like `useEffect`, `useLayoutEffect` can return a cleanup function to run when the component unmounts or dependencies change:

```jsx
useLayoutEffect(() => {
  console.log('Effect running');

  return () => {
    console.log('Cleanup running');
  };
}, []);
```

---

### Performance Considerations

1. **Blocking Paint**:
   - Because `useLayoutEffect` runs synchronously, it can block the browser's rendering process if it performs heavy calculations.

2. **Use Sparingly**:
   - Prefer `useEffect` unless you specifically need to measure or manipulate the DOM synchronously.

3. **Alternative for SSR**:
   - `useLayoutEffect` can cause warnings in server-side rendering (SSR) environments like Next.js. Use `useEffect` instead for SSR-safe code.

---

### Common Use Cases

1. **DOM Measurements**:
   - E.g., retrieving element dimensions (`offsetWidth`, `offsetHeight`).

2. **Setting Scroll Positions**:
   - E.g., restoring scroll position after rendering.

3. **Synchronizing Animations**:
   - E.g., ensuring CSS animations are applied without flickering.

4. **3rd-Party Libraries**:
   - Initializing libraries that require direct DOM manipulation (e.g., charting libraries).

---

### Summary

- **`useLayoutEffect`** runs synchronously after the DOM update but before the paint, making it ideal for DOM measurements and updates that must happen immediately.
- Use it sparingly and only when necessary, as it can block rendering and impact performance.
- Prefer `useEffect` for non-urgent side effects.