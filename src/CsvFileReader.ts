import fs from "fs"

export class CsvFileReader {
  data: string[][] = []
  constructor(public fileame: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileame, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
  }
}
