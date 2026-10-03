// Prefer a caller-supplied or locally installed development dependency.
let playwright;
if(process.env.PLAYWRIGHT_MODULE)playwright=require(process.env.PLAYWRIGHT_MODULE);
else{try{playwright=require('playwright')}catch{playwright=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')}}
module.exports=playwright;
