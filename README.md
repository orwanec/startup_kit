# startup_kit
just a test project for Web Development as a startup kit

##Running
#### 0.
Everything now inside the:
```
npm start
```
*Note 1. it uses a real API now by accessing http://localhost:3001/, to get a mock API you need to
set a query: http://localhost:3001/?useMockApi=true. It is easy way to switch between Mock API and
Production API.*
*Node 2. to rin in prod use the following (prebuild and postbuild will run automatically):*
``
npm run build
``

#### 1.
Nodemon is a nice guy to automatically refresh the server:
`
npx nodemon buildScripts\srcServer.js
`
#### 2.
Just to share the project with others - use localtunnel:
`
npx lt --port 3001
npx lt --port 3001 --subdomain dpavlenko
`

## Notes:
* Use Browsersync to test on different user-agents
* Use Express (http-server or live-server) as a DEV APP Server
* For automation of the build purposes use Gulp (faster that Grunt) or npm scripts
* Use debugger by pasting in js code to stop the browser on the desired place
* Added surge to deploy static! files to production via npn run deploy. Login: gmail, pass is 82**3***
