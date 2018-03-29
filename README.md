# olympic-medal-count

Olympic Medal Count Component Using React + Redux + Webpack

Libraries:
- React + Redux + Webpack

Testing Framework:
- Mocha + Enzyme + Sinon + Chai

**To Run locally:**
```
$ npm install
$ npm run start
```
Try http://localhost:8080 or http://localhost:8081

**To build for production:**
```
$ npm install
$ npm run build
```

**To run test:**
```
$ npm run test
```

**To run test in watch mode:**
```
npm run test:watch
```

**Checklist:**
- [x] Display only top 10 countries after sorted.
- [x] Style as per mock given.
- [x] Use preferably React.
- [x] Default SortBy Gold.
- [x] If user click gold medal, Sort By gold  in descending order & Tie breaker is silver.
- [x] If user click silver medal, Sort By silver in descending order & Tie breaker is gold.
- [x] If user click bronze medal, Sort By bronze in descending order & Tie breaker is gold.
- [x] If user click total medal, Sort By total in descending order & Tie breaker is gold.
- [x] Display country flag.
- [x] Highlight active sort.
- [x] Fetch Data from server Once asynchronously.
- [x] Handle error while fetching data & display error message.
- [x] The medals should not be re-fetched on sort change.
- [x] On sort change, the new countries enter & depart the top 10 display.

**Yet to do:**
- [ ] Sorter utility unit testing.
- [ ] CSS preprocessing.

**Successful screenshot:**

![Alt text](/medal-count.png?raw=true "Medal Count")

**Error screenshot:**

![Alt text](/error.png?raw=true "Error Message")
