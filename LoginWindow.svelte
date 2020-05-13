<script>
  import Login from "./Login.svelte";
  import Signup from "./Signup.svelte";

  let isLogin = false;
</script>

{#if isLogin}
  <Login />
{:else}
  <Signup />
{/if}

<button
  on:click={() => {
    isLogin = !isLogin;
  }}>
  {isLogin ? 'Login' : 'Signup'}
</button>
