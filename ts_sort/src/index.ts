class Sorter{

  constructor(private collection:number[]){}

  sort(){
    const {length} = this.collection;
    for (let index = 0; index < length-1; index++) {
      for (let j = 0; j < length-1-index; j++) {
        if(this.collection[j]>this.collection[j+1]){
          const lhs = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = lhs;
        }
      }
    }
  }
  show(){
    console.log(this.collection);
  }

}


const sorter = new Sorter([1,58,-12,98,-125]);
sorter.sort();
sorter.show();