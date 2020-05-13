<script>
  import { Accounts } from "meteor/accounts-base";
  // Props
  export let heading = "Login";

  // State
  let email = "";
  let password = "";

  // Actions
  function onSubmit() {
    Accounts.createUser({
      password,
      email
    });
  }
</script>

<h3>{heading}</h3>

<form on:submit|preventDefault={onSubmit}>
  <div>
    <label>
      Email
      <input placeholder="test@yo.com" type="email" bind:value={email} />
    </label>
  </div>
  <div>
    <label>
      Password
      <input placeholder="1234" type="password" bind:value={password} />
    </label>
  </div>
  <button>Signup</button>
</form>
