1. **Portals**-
   This is actually how portals work in React (ReactDOM.createPortal) → you render React components into a DOM node outside of root. In that case, React still manages it, and React DevTools will show it under a “Portal” node.

   If you just hardcode a <div> in public/index.html outside root, you’ll see it in browser DevTools, but not in React DevTools.

2. **Type attribute**-
   The type attribute in <script> tags specifies how the browser should interpret the script. Here are the most common types:
   type="text/javascript" (default): Traditional JavaScript. You can omit type for classic scripts.
   type="module": ES modules. Enables import/export syntax and strict mode by default.
   type="text/ecmascript": Rarely used, similar to text/javascript.
   type="application/json": Used for embedding JSON data, not for executable scripts.
   If you don't use type="module":
   The browser treats the script as a classic script.
   You cannot use import or export statements.
   Module-specific features (like top-level await) are unavailable.

3. **Strict Mode**-
   React.StrictMode is a tool for highlighting potential problems in your React application during development. It does not render any visible UI or affect production builds.
   Common uses of StrictMode:
   Identifies unsafe lifecycle methods.
   Warns about deprecated APIs.
   Detects unexpected side effects.
   Double-invokes certain functions (like component render and effects) to help catch bugs.
   it does not affect performance or behavior in production builds. Double rendering happens only in Dev mode

4. **npm vs npx**
   npx (Node Package Execute)
   What it is: A package runner that comes with npm (since npm v5.2+).
   What it does:
   Lets you run packages without installing them globally.
   Runs executables from node_modules/.bin if already installed.
   If not installed, it will temporarily download and run them, then clean up.

   npm (Node Package Manager)
   What it is: A package manager for JavaScript that comes with Node.js.
   What it does:
   Installs libraries/packages into your project (node_modules).
   Adds dependencies into your package.json.
   Used for scripts you define in your project.

5. **Closure**
   A closure is a function along with references to it's lexical environment.
   It remembers it's scope even when it's executed from outside scope.
   UseState hook uses Closure behind the scenes

   function createCounter() {
   let count = 0; // private variable

return {
increment: () => ++count,
decrement: () => --count,
getValue: () => count
};
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getValue()); // 1
👉 count is not directly accessible, only via closures.

The callback functions also remembers the outer functions params
Closures are behind array methods.

Closure 
'Closure' property is created inside scope in browser.
