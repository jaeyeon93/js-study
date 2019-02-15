const url = require('url');

const URL = url.URL;

const myURL = new URL('https://www.acmicpc.net/problem/4673');
console.log('myURL() : ', myURL);
console.log('url.format() : ', url.format(myURL));
console.log('--------------------');

const parseURL = url.parse('https://www.acmicpc.net/problem/4673');
console.log('url.parse():', parseURL);