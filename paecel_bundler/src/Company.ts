import  faker from "faker";


export class Company{
  companyName : string;
  catchPhrase : string;
  location :{
    lat : number;
    lng:number
  };

  constructor(){
      const fakeCompany = faker.company;
      const fakeAddress = faker.address;
      this.companyName = fakeCompany.companyName();
      this.catchPhrase = fakeCompany.catchPhrase()
      this.location = {
        lat : parseFloat(fakeAddress.latitude()), 
        lng : parseFloat(fakeAddress.latitude())
      };
  }

}