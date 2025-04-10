# Most Viewed NYT Articles

## Installation

- Clone the repository

```js
  git clone https://github.com/yourusername/nyt-most-viewed.git
  cd nyt-most-viewed
```

```json
  yarn install
```

- Create a `.env` file in the root directory and add your NYT API key:

```js
  VITE_API_KEY=your_nyt_api_key
  VITE_API_URL=https://api.nytimes.com/svc/mostpopular/v2/viewed
```

- Run the application

```js
  yarn dev
```

- Open your browser and navigate to [http://localhost:5173](http://localhost:5173)
- You should see the application running

## Testing

- Run the tests

```js
  yarn test
```

- Test coverage

```js
  yarn test:cov
```

- `yarn build` to build the project
- `yarn preview` to preview it (NB: made sure `yarn build` is run before you preview)

- Run `yarn lint` to check for errors

### Cypress

- Run `yarn cy:open` to open the cypress test runner
- Select `E2E testing`
- Choose your favorite browser
- Select the test you want to run

### SonarQube

- It is assumed that your have sonarqube installed and running on your machine
- Create a new "Local Project" from the sonarqube dashboard on your machine [http://localhost:9000](http://localhost:9000)
- Input the project name and click "Next"
- Choose "Use the global setting" and click "Create project"
- Select "Locally" for the Analyse method, you will be asked to generate a token, click "Generate"
- Copy the token and click "Continue
- Select `JS/TS/Web` for project options
- An executable script will be generated, copy the script in the root directory of the project
- If all goes well, you should see the analysis results in `http://localhost:9000/dashboard?id=nyt-most-viewed`

The production version is live at:
🔗 [https://nyt-most-viewed.vercel.app](https://nyt-most-viewed.vercel.app/)
