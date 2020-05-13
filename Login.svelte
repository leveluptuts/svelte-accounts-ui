<script>
  import { Accounts } from "meteor/accounts-base";
  import { Meteor } from "meteor/meteor";

  let email = "";
  let password = "";

  function onSubmit() {
    Meteor.loginWithPassword(email, password);
  }
</script>

<h3>Login</h3>

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
  <button>Login</button>
</form>
