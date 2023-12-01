fetch(`https://restcountries.com/v3.1/name/${"fr"}/?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>console.log(t)));
//# sourceMappingURL=index.8c3869ec.js.map
