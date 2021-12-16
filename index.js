import DataReader from "./utils/dataReader.js";
import DataSorter from "./utils/dataSorter.js";
import DataWriter from "./utils/dataWriter.js";

const inputFileName = "unsorted-names-list.txt";
const outputFileName = "sorted-names-list.txt";

const dataReader = new DataReader(inputFileName);
const dataWriter = new DataWriter(outputFileName);
const dataSorter = new DataSorter();

dataReader.readFile().then((unsortedData) => {
  const sortedData = dataSorter.sortRecords(unsortedData);
  dataWriter
    .writeFile(sortedData)
    .then(() => {
      console.log(sortedData);
    })
    .catch((r) => {
      console.log("error occured while writing to file " + r);
    });
});
