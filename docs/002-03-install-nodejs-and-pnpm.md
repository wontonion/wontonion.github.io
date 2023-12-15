# Install Node.js and pnpm  

## Steps

##### 1. install Node.js

##### 2. npm will be installed together with Node.js

##### 3. configure the global repository of npm
this can avoid 权限问题  
`npm config set prefix $HOME/.node_modules`
set repository path as environment variable
"export PATH=$HOME/.node_modules/bin:\$PATH"
if you are in the mainland of china, you can set up npm source using TaoBao  
`npm config set registry https://registry.npmmirror.com/`

   
##### 4. install pnpm 
`npm install -g pnpm`
`pnpm setup`
##### 5. add pnpm source 
`pnpm add nnrm -g`
`nnrm use taobao`

then we can swich different version of Node.js globally
`pnpm env use --global latest`
`pnpm env use --global lts`
