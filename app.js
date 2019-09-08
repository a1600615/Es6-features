


class Apart {
    constructor(address, price, noofrooms, type) {
        this.address = address;
        this.price = price;
        this.noofrooms = noofrooms;
        this.type = type;
        }
   aptinfo = () => {
       return `${this.address} have with aprice of ${this.price} , there are 
           ${this.noofrooms} trooms who belong to  ${this.type} apartments`;
           
           
    }
}

// instantiate objects for Apart
const apart1=new Apart("kitarakuja 3", 300, 20,"student");

aptinfo1 = () => {
let fullaptinfo= apart1.aptinfo();
return fullaptinfo;
}
console.log(apart1.aptinfo())
//some sample methods to manipulate the Apart object
Apart.prototype.changeaptprice=function(newaptprice){
this.price=newaptprice;
};
apart1.changeaptprice('500')


class Market{
    constructor(name,location, distfromapt) {
        this.name=name;
        this.location=location;
        this.distfromapt=distfromapt;
       
    }
    marketinfo(){
        return `${this.name} is located at  ${this.location} and it is
         ${this.distfromapt} km away`;
     }

}



// instantiate objects for Markets near the apartment
const market1= new Market("alepa", "paraistentie20", 40);
const market2= new Market("kmarket", "martinlasko", 60);

console.log();


//some sample methods to manipulate the Market object
nearest = () => {

    if (market1.distfromapt < market2.distfromapt){
        let mark1=`${market1.name} 
        is the closest it is${market2.distfromapt} km from apt`;
        return mark1;
    }
    else{
        let mark2=`${market2.name}  
        is the closest it is${market2.distfromapt} km from apt`;
        return mark2;
    }
    };
    
     
    




// another constructor for Bus information by using taking the values of Market
class Busstop extends Market{
    constructor(name,location,distfromapt,stopid){
    super(name, location, distfromapt); 
   this.stopid=stopid;
    }
   };


   const busstop1=new Busstop("Kiskontie", "Tenholantie", 4, 2081)
   const busstop2=new Busstop("Kiskontie", "Tenholantie", 7, 2081)

  

   //object.values will create an array of from the object and make it easier to work with



   busstopfind = () => {
    let arr1 = Object.values(busstop1);
    let arr2 = Object.values(busstop2);
    let min = Math.min(arr1[2], arr2[2]);
    return `${min} KM away`;
   
   };


  
   
 
 
  console.log( busstopfind());
 
  






 






/*

  let arr=Object.values(Market)
   let min = Math.min(...arr);
   console.log(min)




aptinfo =  () =>{
    return`${this.address}${this.noofrooms}${this.roomtype}${this.price}`;
}

document.write(apartment.aptinfo())

*/