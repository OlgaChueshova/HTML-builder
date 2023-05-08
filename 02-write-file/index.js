const process = require("process");
const fs = require('fs');
const path = require('path');
const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');

fs.writeFile(
    path.join(__dirname, 'text.txt'),
    'Hello world',
    (err) => {
        if (err) throw err;
        else {
            const outp = fs.createWriteStream("text.txt", "utf-8");
            const rl = readline.createInterface({ input, output });
            rl.question("Привет! Введи данные! \n", (data) => outp.write(data));
            rl.on('SIGINT', () => {
                rl.close();
            });
        }
    }
);

process.on('exit', () => {
    console.log("До встречи!");
});

