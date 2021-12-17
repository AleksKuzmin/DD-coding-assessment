import DataWriter from "../utils/dataWriter";
import "regenerator-runtime/runtime";

const outputFile = "sorted-names-list.txt";

test("Should throw error when write file error", () => {
  const dw = new DataWriter(outputFile);
  return expect(dw.writeFile()).rejects.toBe(
    "Error occured while writing the output file"
  );
});
