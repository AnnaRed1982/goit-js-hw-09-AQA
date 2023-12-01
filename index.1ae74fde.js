!function(){var n;n="fr",fetch("".concat("https://restcountries.com/v3.1/name/").concat(n,"/?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.1ae74fde.js.map
