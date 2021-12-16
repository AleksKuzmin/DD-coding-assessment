import DataReader from "./dataReader";
import "regenerator-runtime/runtime";

const inputFile = "unsorted-names-list.txt";

test("Check that the input file can be read into array", async () => {
  const dr = new DataReader(inputFile);
  const data = await dr.readFile();
  expect(Array.isArray(data)).toBe(true);
});
