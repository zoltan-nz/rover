# Mars Rover Code Challenge

## Documents

- [The Challenge](docs/mars-rovar-code-challenge.md)
- [Research Notes](docs/research.md)

## TODO

- [x] Setup project structure and support environment:
  - [x] Prettier
  - [x] TypeScript
  - [x] Eslint
  - [x] Husky
  - [x] Jest
- [x] Implement CLI support

---

- [x] Add models:
  - [x] Plateau
  - [x] Rover
  - [x] Compass, Command, Instructions

---

- [x] Add questions:
  - [x] Ask Plateau Size
  - [x] Ask Rover Landing Coordinates
  - [x] Ask Instructions

---

- [x] Print coordinates of rovers before exit

---

- [ ] Implement Simulation
  - [x] Validate rover landing coordinates with the Plateau Size
  - [ ] Iterate Rover instructions
    - [ ] Translate instruction to Rover command
    - [ ] Detect Rover collision
    - [ ] Detect Rover reached Plateau boundaries

## How to run

Prerequisites:

- Node.js v12.9 or above
- Yarn v1.22.10 or above

Install the application and run the app. (Supports only Mac and Linux.)

```
$ yarn deploy
$ rover
```

## Scripts

| Instruction     | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| yarn clean      | Clean previously created build files                          |
| yarn build      | Compile TypeScript files to JS into ./dist folder             |
| yarn build:prod | Compile and exclude test files                                |
| yarn deploy     | Compile production and install as global command in localhost |
| yarn lint       | Run eslint with fix                                           |
| yarn format     | Run prettier                                                  |
| yarn start      | Run cli with ts-node                                          |
| yarn start:prod | Run compiled version                                          |
| yarn test       | Run jest                                                      |
| yarn verify     | Run checks: format, lint, test and build. Ideal for CI/CD     |
