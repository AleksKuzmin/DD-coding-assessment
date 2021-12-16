import DataReader from "./utils/dataReader";

const inputFile = "unsorted-names-list.txt";

test("Check that the input file can be read into array", async () => {
  const dr = new DataReader(inputFile);
  const data = await dr.readFile();
  expect(Array.isArray(data)).toBe(true);
});

test("Check that array contains a specific name", async () => {
  const dr = new DataReader(inputFile);
  await expect(dr.readFile()).resolves.toContain("Marin Alvarez");
});

test("Check that non-existing file throws error", async () => {
  const dr = new DataReader("abc");
  await expect(dr.readFile).rejects.toMatch("Error");
});
