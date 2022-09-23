import { type } from "os";
import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./MatchDataReader";
import { MatchResult } from "./MatchResult";
import { parseDateStaring } from "./Utils";



export class MatchDetails {

    private matchDate: Date;
    public homeTeam: string;
    public awayTeam: string;
    private homeGoals: number;
    private awayGoals: number;
    public matchResult: MatchResult;
    private stdName: string;

  constructor(matchData:MatchData) { 
    this.matchDate = matchData[0];
    this.homeTeam = matchData[1];
    this.awayTeam = matchData[2];
    this.homeGoals = matchData[3];
    this.awayGoals = matchData[4];
    this.matchResult = matchData[5];
    this.stdName = matchData[6];
  }

  mapRow(data : string[]):[Date,string,string,number,number,MatchResult,string]{
    return [ parseDateStaring(data[0]),data[1],data[2],parseInt(data[3]),
        parseInt(data[4]), data[5] as MatchResult, data[6]
      ]
  }

  didWin(teamName:string):boolean{
    return (this.homeTeam === teamName && this.matchResult === MatchResult.HomeWin) || 
      (this.awayTeam === teamName && this.matchResult === MatchResult.AwayWin);
  }
}
