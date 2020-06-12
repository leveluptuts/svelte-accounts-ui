# levelup:svelte-accounts-ui

> A word or warning. This is super rough rn. I'm publishing to allow for community involvement and to get feedback. That said... it's totally usable.

> Currently email & password is the only supported means of logging in.

## Basic

```js
<script>
import { LoginWindow } from 'levelup:svelte-accounts-ui'
</script>

<LoginWindow />
```

## You can also

```js
<script>
import { Login, Signup, Logout } from 'levelup:svelte-accounts-ui'
</script>

<Signup heading="Create User" />
<Login />
<Logout />
```

## Components

### LoginWindow

Easy UI for Logins

| Prop          | Type   | Default   | Description |
| ------------- | ------ | --------- | ----------- |
| signupHeading | string | "Sign Up" |             |
| loginHeading  | string | "Login"   |             |

### Login

Login Form

| Prop    | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| heading | string | "Login" |             |

### Signup

Sign Up Form

| Prop          | Type   | Default   | Description |
| ------------- | ------ | --------- | ----------- |
| signupHeading | string | "Sign Up" |             |

### Logout

A button that logs the user out

| Prop | Type   | Default  | Description |
| ---- | ------ | -------- | ----------- |
| text | string | "Logout" |             |

### Todo

- Reset Password
- Forgot Password Link
- Config options
- Default window view
- Style Wrapper Component
- Text as props
- Oauth Services
- 😅 Long way to go huh?
