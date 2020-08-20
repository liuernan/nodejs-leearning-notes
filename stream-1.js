const fs = require("fs");

const writeStream = fs.createWriteStream('./streamIO.txt');

for (let i = 0; i < 10000; i++) {
  writeStream.write(`这是第 ${i} 次插入数据\n`);
}
// writeStream.write('666\n');

console.log('done');
