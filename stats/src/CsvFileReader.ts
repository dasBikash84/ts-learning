import fs from "fs";

export abstract class CsvFileReader<T>{
  
  readListFromCsv(fileName:string,separator:string = ','):T[]{
    return fs.readFileSync(fileName,{
      encoding:'utf-8'
    }).split('\n').map(ln => this.mapRow(ln.split(separator)))
  }

  protected abstract mapRow(data : string[]): T
}