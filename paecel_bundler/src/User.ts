import  faker from "faker";


export class User{
  name : string;
  location :{
    lat : number;
    lng:number
  };

  constructor(){
      const fakeName = faker.name;
      const fakeAddress = faker.address;
      this.name = `${fakeName.firstName()} ${fakeName.middleName()} ${fakeName.lastName()}`;
      this.location = {
        lat : parseFloat(fakeAddress.latitude()), 
        lng : parseFloat(fakeAddress.latitude())
      };
  }

}