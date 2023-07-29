import fs from "fs"

export abstract class CsvFileReader<T> {
  data: T[] = []
  constructor(public fileame: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.fileame, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow)
  }
}
