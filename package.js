Package.describe({
  name: "leveluptutorials:svelte-accounts-ui",
  version: "0.0.1",
  summary: "The simplicity of Blaze drop in ui, but in Svelte",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/leveluptuts/svelte-accounts-ui",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom("1.10.2");
  api.use("ecmascript");
  api.use("svelte:compiler@3.16.4_1");
  api.mainModule("svelte-accounts-ui.js");
});

// Package.onTest(function (api) {
//   api.use("ecmascript");
//   api.use("tinytest");
//   api.use("svelte-accounts-ui");
//   api.mainModule("svelte-accounts-ui-tests.js");
// });
