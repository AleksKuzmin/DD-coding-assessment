import DataSorter from "../utils/dataSorter";
import "regenerator-runtime/runtime";

const unsortedArray = [
  "Blake Mitchel",
  "Garcia Goia Martines Morales",
  "Wayne Alex",
  "de Jager Frank",
  "Jones Kelly",
];
const sortedArray = [
  "Wayne Alex",
  "de Jager Frank",
  "Jones Kelly",
  "Blake Mitchel",
  "Garcia Goia Martines Morales",
];

test("Should return array sorted by names", () => {
  expect(DataSorter.sortRecords(unsortedArray)).toBe(sortedArray.join("\n"));
});
