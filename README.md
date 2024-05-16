# Dream Powered Media

Это клиентская часть, созданная с помощью React для реализации фукнционала фронтендной части сервиса DPM.


### Setup

- install nodejs, npm, npx and docker
- after cloning change dir to app root
- `npm i`
- `npm start` or `make run`


### Структура

```
├── public
└── src
    ├── application
    ├── core
    │   ├── components
    │   ├── constants
    │   ├── hooks
    │   ├── layout
    │   ├── models
    │   ├── styles
    │   ├── types
    │   └── utils
    ├── pages
    ├── scripts
    ├── services
    │   ├── passport
    │   │   ├── api
    │   │   ├── components
    │   │   └── utils
    │   ├── landing
    │   │   ├── api
    │   │   └── components
    │   └── general
    │       ├── api
    │       └── components
    └── storage
        ├── browser
        └── redux
```

### ССылки

- react: https://react.dev/
- redux: https://redux.js.org/
- design: https://feature-sliced.design/


### Author

- jussiar


### How to contribute?

- `git clone {repo_url}` (if not already done)
- `git checkout main`
- `git fetch && git pull`
- `git checkout -b feature/{user}/{feature_name}`
- write your feature and commit it
- push your branch with `git push -u {branch}`
- create pull-request to main and wait for review
- after accepting the review merge your PR
