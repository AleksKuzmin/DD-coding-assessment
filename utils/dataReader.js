import fs from "fs";

export default class DataReader {
  constructor(filename) {
    this.filename = filename;
  }

  readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filename, "utf-8", function (error, data) {
        if (error) {
          console.log(error);
          reject(error);
        }
        console.log(data.split("\n"));
        resolve(data.split("\n"));
      });
    });
  }
}
