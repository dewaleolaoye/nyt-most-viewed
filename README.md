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

The production version is live at:
🔗 [https://nyt-most-viewed.vercel.app](https://nyt-most-viewed.vercel.app/)
