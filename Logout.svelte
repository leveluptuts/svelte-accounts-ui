<script>
  import { Meteor } from "meteor/meteor";

  let text = "Logout";
</script>

<button
  on:click={() => {
    Meteor.logout();
  }}>
  {text}
</button>
