import { MatchResult } from "./MatchResults"
import { MatchReader } from "./MatchReader"
import { CsvFileReader } from "./CsvFileReader"

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv")

// Create instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins: number = 0
for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}
console.log(`Man United wins ${manUnitedWins} games`)
