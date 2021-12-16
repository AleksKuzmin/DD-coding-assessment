import DataReader from "./utils/dataReader.js";
import DataSorter from "./utils/dataSorter.js";


const inputFileName = "unsorted-names-list.txt";
const outputFileName = "sorted-names-list.txt";

const dataReader = new DataReader(inputFileName);

const dataSorter = new DataSorter();

dataReader.readFile().then((unsortedData) => {
  const sortedData = dataSorter.sortRecords(unsortedData);
  
});