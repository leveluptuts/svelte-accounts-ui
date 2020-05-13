// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by svelte-accounts-ui.js.
import { name as packageName } from "meteor/svelte-accounts-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('svelte-accounts-ui - example', function (test) {
  test.equal(packageName, "svelte-accounts-ui");
});
