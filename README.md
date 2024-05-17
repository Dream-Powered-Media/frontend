# Dream Powered Media

Это клиентская часть, созданная с помощью React для реализации фукнционала фронтендной части сервиса DPM.


### Setup


#### Установка

- install nodejs, npm, npx and docker
- clone repo
- after cloning change dir to app root

#### Запуск

- `npm i` or `make setup`
- `npm start` or `make run`

#### В случае проблем 

Если приложение работает неверно или не работает, обратите внимание на версии react-scripts - возможно необходимо добиться совместимости с некоторыми другими пакетами.


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
    │   ├── top
    │   │   ├── api
    │   │   └── components
    │   └── general
    │       ├── api
    │       └── components
    └── storage
        ├── browser
        └── redux
```

### Ссылки

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
