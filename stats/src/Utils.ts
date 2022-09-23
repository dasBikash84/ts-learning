export function parseDateStaring(dateStr:string):Date{
  const dateItems = dateStr.split('/').map(it => parseInt(it.trim()));
  return new Date(dateItems[2],dateItems[1]-1,dateItems[0]);
}