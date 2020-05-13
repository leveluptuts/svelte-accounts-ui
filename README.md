# leveluptuts:svelte-accounts-ui

> A word or warning. This is super rough rn. I'm publishing to allow for community involvement and to get feedback. That said... it's totally usable.

> Currently email & password is the only supported means of logging in.

## Basic

```js
<script>
import { LoginWindow } from 'leveluptutorials:svelte-accounts-ui'
</script>

<LoginWindow />
```

## You can also

```js
<script>
import { Login } from 'leveluptutorials:svelte-accounts-ui'
</script>

<Login />
```

```js
<script>
import { Signup } from 'leveluptutorials:svelte-accounts-ui'
</script>

<Signup />
```

### Todo

- Reset Password
- Forgot Password Link
- Config options
- Default window view
- Style Wrapper Component
- Text as props
- Oauth Services
- 😅 Long way to go huh?
