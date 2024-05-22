import fs, { writeFile, readFile, createWriteStream } from "node:fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer.prompt([{ message: "Your URL?", name: "URL" }]).then((answer) => {
    console.log(answer);
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`qr_image.png`));
    fs.writeFile("userInput.txt", url, (err) => {
        if(err) throw err;
    });
}).catch((err) => {
    if (err.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
    // Something else went wrong
    }
});
