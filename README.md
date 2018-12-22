### Dev environment:

- VS Code w/ Extensions:
    - Todo+: fabiospampinato.vscode-todo-plus
    - TS Lint: eg2.tslint
    - Stylelint: shinnn.stylelint
    - REST Client: humao.rest-client

### Building:

`yarn install`

site: `yarn run site:build:dev` or `yarn run site:serve:dev` @ `https://localhost:8080`  
(meant to be run in a **browser** environment)

updater: not sure as of now. trying to get stuff worked out. front-end needs to have more work done before I can think about this little back-end thing, but it *is* meant to be run in a **node** environment (ver. 11+, will most likely be backwards compatible with older versions)