import fs from "fs";

export default class DataWriter {
  constructor(filename) {
    this.filename = filename;
  }

  writeFile(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filename, data, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}
