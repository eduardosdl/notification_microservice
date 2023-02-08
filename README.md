# Notification Microservice

- Is a microservice to manage notificaions
- Consume informaions from apache kafka
- Actions
  - send
  - read
  - unread
  - cancel
  - count

## Technologies
- typescript
- next
- prisma
- jest
- sqlite

## To use in local
- Clone repository
- runn comand in kafka folder
  ```
    $ docker-compose up
  ```
- Envairoment variables in notificaion
  ```
    DATABASE_URL: file:./dev.db
  ```
- And run comands in notificaion
  ```
    $ yarn add

    $ yarn start
  ```
- Run comand to create a notificaion in kafka
  ```
    $ yarn add

    $ node producer.js
  ```
