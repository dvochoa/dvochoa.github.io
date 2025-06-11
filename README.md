# dvochoa.github.io

My personal website, available at [www.dannyochoa.net](www.dannyochoa.net).

## Development

Built using [NextJS](https://nextjs.org/), TypeScript, and [tailwind](https://tailwindcss.com/).

After initial download you'll want to run `npm install` to install all dependencies locally. These will be available in the `node_modules` directory.

Use the following scripts during development:

- Run `npm run dev` to start a local instance of the web application on `localhost:3000`.
- Run `npm run test` to run the entire test suite.
- Run `npm run lint` to run the linter.
  - The linter uses [prettier](https://prettier.io/) for code formatting

Several Github Action Workflows are set up that affect development:

- [test.yml](https://github.com/dvochoa/dvochoa.github.io/blob/main/.github/workflows/test.yml) runs `npm run test` on commit and merges are blocked on failing tests.
- [lint.yml](https://github.com/dvochoa/dvochoa.github.io/blob/main/.github/workflows/lint.yml) runs `npm run lint` on commit and merges are blocked when formatting is off.

## Deployment

This website is hosted using [Github Pages](https://pages.github.com/).

The [nextjs.yml](https://github.com/dvochoa/dvochoa.github.io/blob/main/.github/workflows/nextjs.yml) workflow triggers a deployment when changes are merged into main. The status of this action and others are visible in the [Actions tab](https://github.com/dvochoa/dvochoa.github.io/actions) of the repo.

## Troubleshooting

If you experience issues that might be related to cached files (e.g. styling or other content representing previous changes) then try the following:

1. Delete your local `node_modules` and `.next` directories: `rm -rf node_modules .next`
2. Reinstall: `npm install`
3. Re-run: `npm run dev`
