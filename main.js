import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const oldpath = "C:\\Users\\RaziKhan\\Desktop\\Carrier\\DEV\\Express_JS\\Clear_Clutter";

let files = await fs.readdir(oldpath);
// console.log(files);

for (const item of files) {

    //Skip directories
    if (fsn.lstatSync(path.join(oldpath, item)).isDirectory()) continue;
    console.log("Runing for: ", item);

    //Get extension
    let ext = item.split(".").pop();


    if (ext != "js" && ext != "json" && item.includes(".")) {
        const newpath = path.join(oldpath,ext);

        //Create folder if not exists
        if(!fsn.existsSync(newpath)){
            await fs.mkdir(newpath);
        }

        //Move file
        await fs.rename(
            path.join(oldpath,item),
            path.join(newpath,item)
        );
    }
}