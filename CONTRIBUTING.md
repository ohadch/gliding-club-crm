# Guidelines

## Working on an issue, and submitting a pull request
- Clone the repository
- Choose an issue in Github, and assign yourself.
- Make sure your `master` branch is up to date.
- Create a feature branch from `master` with the following template for its name:
  `master_#{issue_number}_some-brief-explanation`. For example: `master_#123_fixes-buggy-flight-selector`
- Code some cool stuff :-)
- Create a Pull Request.

## Writing commit messages
Use the following template for your commit messages:
```
#{issue_number} A brief title that describes exactly what the commit adds, in present tense

- Additional data 1
- Additional data 2
- ...

## It is ok to create sections, but keep it tidy
- Additional data for this section
- maybe some more
- ...
```

## Code style
- Write comments only when necessary.
- Make sure to describe WHY you wrote your code, and not what it does.
- DO NOT use `any` or exclamation marks to bypass Typescript.

## Server
### Logging
- Use `Logger()` function instead of `console.log`.
- Log everything! The more the merrier.

### Testing
- Unit tests are MANDATORY for __Every__ public function.
- Make sure to stub properly.
- Do not call live services (APIs / DB) in your tests. 

