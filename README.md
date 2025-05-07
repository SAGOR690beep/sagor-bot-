## <h3 align="center">

  <p align="center"><img src="https://img.shields.io/badge/WELCOME%20TO -SAGOR PROJECT BOT-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">  

</h3>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=2000&pause=100&color=F70000&width=435&lines=THIS+IS+MIRAI+PROJECT+;PROJECT+DEPLOY;MOHAMMAD+SAGOR+)](https://git.io/typing-svg)

[![Facebook](https://img.shields.io/badge/Facebook-green?style=for-the-badge&logo=facebook)](https://www.facebook.com/profile.php?id=61573038178753&mibextid=kFxxJD)
[![Instagram](https://img.shields.io/badge/Instagram-purple?style=for-the-badge&logo=instagram)](😃)
[![YouTube](https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube)]( ERROR )

![Image](https://i.imgur.com/g3jPjAw.jpeg)


## NPM INSTALL 
```bash
npm install
```
## NPM START
```bash
npm start
```
## 20x WORKFLOWS NEED
```bash
name: SaGor BoT

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    # Step to check out the repository code
    - uses: actions/checkout@v2

    # Step to set up the specified Node.js version
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

    # Step to install dependencies
    - name: Install dependencies
      run: npm install

    # Step to run the bot with the correct port
    - name: Start the bot
      env:
        PORT: 8080
      run: npm start
```
