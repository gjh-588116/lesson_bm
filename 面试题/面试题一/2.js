setTimeout(() => { console.log('aaa') }, 0);
new Promise((resolve) => { console.log('bbb') }).then(() => { console.log('ccc') });
console.log('ddd')