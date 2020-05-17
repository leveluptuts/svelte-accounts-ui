<script>
  import Login from "./Login.svelte";
  import Signup from "./Signup.svelte";
  import ForgotPassword from "./ForgotPassword.svelte";
  import { error } from "./state";

  let loginHeading = "Login";
  let signupHeading = "Sign Up";
  let windowType = "LOGIN";
</script>

<style>
  .error {
    color: red;
  }
</style>

{#if windowType === 'LOGIN'}
  <Login heading={loginHeading} />
  <p>Need an account?</p>

  <button
    on:click={() => {
      windowType = 'SIGNUP';
    }}>
    Signup
  </button>
{:else if windowType === 'SIGNUP'}
  <Signup heading={signupHeading} />
  <p>I already have an account.</p>
  <button
    on:click={() => {
      windowType = 'LOGIN';
    }}>
    Login
  </button>
{:else}
  <ForgotPassword />
  <p>I know my password</p>
  <button
    on:click={() => {
      windowType = 'LOGIN';
    }}>
    Login
  </button>
{/if}

{#if $error}
  <p class="error">{$error}</p>
{/if}

<button
  on:click={() => {
    windowType = 'FORGOT_PASSWORD';
  }}>
  Forgot Password
</button>
