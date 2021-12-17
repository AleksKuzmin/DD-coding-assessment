import fs from 'fs'

export default class DataReader {
  constructor(filename) {
    this.filename = filename;
  }

  readFile() {
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(this.filename, "utf-8", (error, data) => {
          resolve(data.split("\n"));
        });
      }
      catch(e) {
        reject('Error occured while reading the input file')
      }
    });
  }
}
