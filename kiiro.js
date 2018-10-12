const requireGyak = require('./gyak.js');

const kiiro = (firstParam, secondParam) => {
  const firstParamInString = firstParam.toString();
  const secondParamInString = secondParam.toString();

  console.log((requireGyak[firstParamInString]) + ',' + (requireGyak[secondParamInString]));
};
kiiro(3, 4);
