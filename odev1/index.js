import getUserData from './apicall.js';

const infoJson = await getUserData(1);
console.log(infoJson);
