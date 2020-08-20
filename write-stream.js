const fs = require("fs");

const writeStream = fs.createWriteStream('./streamIO.txt');

let falseCount = 0;

for (let i = 0; i < 1000000; i++) {
  const ok = writeStream.write(`这是第 ${i} 次插入数据\n`);
//  console.log(ok);

  if (ok) {
    console.log('不够喝');
  } else {
     console.log('太快了');
    falseCount++;
  }
}

// writeStream.write('666\n');

console.log('done');
console.log(falseCount);
