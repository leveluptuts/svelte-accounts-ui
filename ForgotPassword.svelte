<script>
  import { Accounts } from "meteor/accounts-base";
  import { Meteor } from "meteor/meteor";
  import { error } from "./state";

  export let heading = "Forgot Password";

  let email = "";
  let isSent = false;

  function onSubmit() {
    Accounts.forgotPassword(
      {
        email
      },
      err => {
        if (!err) {
          isSent = true;
          email = "";
          return;
        }
        error.set(err.reason);
      }
    );
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
  <button>Send Request</button>
</form>
