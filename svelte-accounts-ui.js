// Write your package code here!

import Login from "./Login.svelte";
import LoginWindow from "./LoginWindow.svelte";
import Signup from "./Signup.svelte";

// Variables exported by this module can be imported by other packages and
// applications. See svelte-accounts-ui-tests.js for an example of importing.
export const name = "svelte-accounts-ui";

export { Login, Signup, LoginWindow };
