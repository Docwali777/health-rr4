
module.exports = function(env){
  console.log(`./webpack.${env}.js`)
return require(`./webpack.${env}.js`)
}
