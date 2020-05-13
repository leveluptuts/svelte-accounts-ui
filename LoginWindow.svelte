<script>
  import Login from "./Login.svelte";
  import Signup from "./Signup.svelte";

  let loginHeading = "Login";
  let signupHeading = "Sign Up";

  let isLogin = false;
</script>

{#if isLogin}
  <Login heading={loginHeading} />
{:else}
  <Signup heading={signupHeading} />
{/if}

<p>{isLogin ? 'Need an account?' : 'I already have an account'}</p>
<button
  on:click={() => {
    isLogin = !isLogin;
  }}>
  {isLogin ? 'Signup' : 'Login'}
</button>
