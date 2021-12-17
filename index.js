import DataReader from "./utils/dataReader.js";
import DataSorter from "./utils/dataSorter.js";
import DataWriter from "./utils/dataWriter.js";
import { argv } from "process";

const inputFileName = argv.slice(2).toString();
const outputFileName = "sorted-names-list.txt";

const dataReader = new DataReader(inputFileName);
const dataWriter = new DataWriter(outputFileName);

dataReader.readFile().then((unsortedData) => {
  const sortedData = DataSorter.sortRecords(unsortedData);
  dataWriter
    .writeFile(sortedData)
    .then(() => {
      console.log(sortedData);
    })
    .catch((r) => {
      console.log("error occured while writing to file " + r);
    });
});
