import { MatchDataReader } from "./MatchDataReader";
import { MatchDetails } from "./MatchDetails";

const matchDataReader = new MatchDataReader();

const mds = matchDataReader
              .readListFromCsv('football.csv')
              .map(it => new MatchDetails(it));

console.log(`Man United own ${
  mds.filter(md => md.didWin('Man United')).length
} times`);
