# startup_kit
just a test project for Web Development as a startup kit

##Running
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
