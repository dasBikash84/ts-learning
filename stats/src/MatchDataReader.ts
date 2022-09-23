import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { parseDateStaring } from "./Utils";

export type MatchData = [Date,string,string,number,number,MatchResult,string];

export class MatchDataReader extends CsvFileReader<MatchData>{

  protected mapRow(data: string[]): MatchData {
    return [ parseDateStaring(data[0]),data[1],data[2],parseInt(data[3]),
        parseInt(data[4]), data[5] as MatchResult, data[6]
      ];
  }

}