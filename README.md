_Documentation for this package can be found [here](https://github.com/AronssonFredrik/service-response-state/tree/master/projects/response-state#readme)._

# Development instructions

## Working with Semantic versioning

### Format of commit messages
Your commit messages have to be in this format:

```
<type>[optional scope]: <description>
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

* `fix:` for fix patches a bug in the codebase (this correlates with PATCH in Semantic Versioning).
* `feat:` for a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
* `BREAKING CHANGE:` introduces a breaking API change (correlating with MAJOR in Semantic Versioning).

`type` may also be one of the following:
`build`, `ci`, `chore`, `docs`, `other`, `perf`, `refactor`, `revert`, `style`, `test`

### Handle versions

Following scripts should be run to handle version:
* `bump:major` - when introducing API change or dependencies are bumped (i.e. Angular for this project)
* `bump:minor` - when introducing new features
* `bump:patch` - when bugfixes or updating deps


Read more @[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
