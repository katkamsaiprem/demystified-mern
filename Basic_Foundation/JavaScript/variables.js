//day-2



let username;

username="saiprem"

console.log(username)

//let - no multiple declaration in same block scope
//let supports reassignments


{
    console.log(username)
  //  let username="sai"//reference error ,cant use before initialization
    console.log(username);
} 
//assignment - does js removes let value after updating value in short 

// **Short answer:**
// ❌ **No. JavaScript does NOT remove the old value of a `let` variable when you update it.**
// It simply **reassigns** the variable to a new value.

// **Example:**

// ```js
// let x = 10;
// x = 20;  // old value replaced, not removed
// ```

// The old value (`10`) is just **overwritten**, and memory cleanup happens automatically later by **JavaScript’s garbage collector**—you don’t control that.

// If you want the *shortest explanation:*
// 👉 **JS overwrites the value, it doesn’t "remove" it manually. Garbage collector handles cleanup.**



//in const ,we have initization at decleration 

//const location;--X

const location="hyd"
location="knr"


//npm cache clean --force ->To clear to cache


// JavaScript is both an interpreted and a Just-In-Time (JIT) compiled language.
//  It is mainly interpreted in the sense that the code is initially executed line-by-line, 
// but modern JavaScript engines like V8 use JIT compilation to convert JavaScript into optimized
//  machine code right before execution. This means JavaScript code is parsed and then compiled just in
//  time for execution, combining interpretation and compilation to 
// achieve better performance and flexibility for web applications.​




// Here’s a clear and simple answer:

// ### **Node.js is based on:**

// * **V8 JavaScript Engine** → Google’s high-performance JS engine (also used in Chrome).
// * Node.js **adds C++ bindings + libuv** for asynchronous, non-blocking I/O.

// So Node.js = **V8 + C++ APIs + libuv + Node runtime**.

// ---

// ### **Web browsers are based on:**

// Each browser uses its own JavaScript engine + its own rendering engine.

// #### **Common JS Engines:**

// * **Chrome / Edge / Opera** → **V8**
// * **Firefox** → **SpiderMonkey**
// * **Safari** → **JavaScriptCore (JSC) / Nitro**
// * **Older MS Edge (Legacy)** → **Chakra**

// #### **Rendering Engines:**

// * **Chrome / Edge / Opera** → **Blink**
// * **Firefox** → **Gecko**
// * **Safari** → **WebKit**

// ---

// ### **Short Answer (very easy to remember):**

// * **Node.js uses V8 engine.**
// * **Most browsers also use their own JS engines (V8, SpiderMonkey, JSC).**
// * **Rendering is done by Blink, WebKit, or Gecko depending on browser.**

// If you want, I can explain **how V8 executes JavaScript internally** in 2–3 easy lines.
