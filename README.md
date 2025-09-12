# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `yarn install`, start a development server:

```bash
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn run build
```

You can preview the production build with `yarn run preview`.

## Deploying

### Automatic Deployment
The project is configured with GitHub Actions for automatic deployment. When you push to or merge into the `main` branch, the site will automatically build and deploy to GitHub Pages.

### Manual Deployment
You can also deploy manually using:

```bash
yarn deploy
```

### <span style="color: red;">⚠️ Important!</span>
<span style="color: red;">**Deployment changes may take 1–2 minutes to appear on the live site.**</span>

You can view the deployed application at: https://sw-logic.github.io/platform-ui

> The project uses `@sveltejs/adapter-static` for static site generation and is configured for GitHub Pages deployment.
