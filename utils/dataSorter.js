export default class DataSorter {
  constructor() {}

  static compareStrings = (s1, s2) =>
    s1.localeCompare(s2, "en", {
      sensitivity: "base",
      ignorePunctuation: true,
    });

  static compare = (a, b) => {
    const splitA = a.split(" ");
    const splitB = b.split(" ");
    const lastA = splitA[splitA.length - 1];
    const lastB = splitB[splitB.length - 1];

    return lastA === lastB
      ? this.compareStrings(splitA[0], splitB[0])
      : this.compareStrings(lastA, lastB);
  };

  static sortRecords(data) {
    return [...data].sort(this.compare).join("\n");
  }
}
