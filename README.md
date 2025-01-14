# Have fun!

## get started!

1. In the file `vite.config.prod.js`, change the `base` parameter to be the name of your repository, **ending with a `/`**
2. You will have to run `prettier` before being able to commit. Use `npm run format`!

## to create a new feature

1. from `dev` | create a new branch `feature/name-of-the-feature` eg. `feature/main-navbar`
2. open a PR `feature/name-of-the-feature` -> `dev`

## to deploy in production

1. from `dev` | create a new branch `release/version-number` eg. `release/v0.1.0`
2. open a PR `release/version-number` -> `main`
3. open a PR `release/version-number` -> `dev`

## to fix a bug in production

1. from `main` | create a new branch `hotfix/name-of-the-bug` eg. `hotfix/broken-navigation`
2. open a PR `hotfix/name-of-the-bug` -> `main`
3. open a PR `hotfix/name-of-the-bug` -> `dev`
