<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Sobre as tecnologias utilizadas

Todas as tecnologias se mostraram necessárias em algum momento na criação dessa aplicação, porém, como solicitado, três delas se destacam entre as demais:

### - Argon
- Segurança da informação nunca é o bastante para nenhuma aplicação. Evoluindo a partir de tecnologias como o bcrypt, o argon consegue criar seus salts a partir de parâmetros de consumo computacional. Nisso, quando o próximo espertão tentar brute force nas suas senhas, vai ter que usar 100MB de memória para cada geração, por exemplo.


### - Fastify
- Muito do node foi criado em cima do express ou de outras ferramentas nativas, como o próprio módulo HTTP. Como uma tecnologia emergente, uso fastify sempre que possível nos meus projetos por uma questão de performance e de aprendizado, que, em benchmarks, se mostra muito mais performático que as tecnologias comumente usadas.


### - Passport
- Simplesmente uma mão na roda para todo tipo de autenticação criada em node. Recentemente usei para autenticações bearer, basic e jwt, porém a gama do passport evolui para praticamente todo tipo de tecnologia de autenticação existe. Como disse anteriormente, levo a questão de segurança muito a sério, então esse é meu amigão de longa data pra auth.


### - Menção Honrosa : class-validator e class-transformer
- No momento que eu escrevo isso, faltam 10 minutos pro fim do prazo, então não tenho tempo de implementar eles. Porém, caso possível, seriam perfeitos para prevenir problemas a nível de rede, já que a tipagem dessas controllers ainda podem ser facilmente burladas.


## Sobre o JWT

Como dito anteriormente, a interface do passport torna a utilização do JWT muito mais simples e viável para o dia a dia. Tanto que sinceramente, comecei o desenvolvimento dessa aplicação hoje a tarde por falta de tempo kkkkk.
O JWT vencerá em um dia, com setado diretamente em seu módulo, criando o fator de impermanência, mas esse valor poderia ser facilmente mudado, já que é um parâmetro sem muitas dependências.
Além disso, a geração se dará por usuário e senha providos corretamente em uma rota de login, que estará a disposição do sysadmin da empresa com o usuário root da aplicação em deploy.


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
