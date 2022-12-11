// we do only declaration in interfaces 

interface IProduct {
    id:number;
    name:string;
    description?:string;  // we make description as a optional parameter, thats mean its not mandatory 
    price:number;         // in the object
    display(): void;
};


var objProduct : IProduct = {  // here we not mentioned description property, but it will not 
    id : 123,                  // throw an error
    name: "IPhone",
    price: 60000 ,
    display(): void{
        console.log(this.id,+ " "+ this.name);  
    }
}

// traverse this object using for loop
for (const key in objProduct) {
   console.log(key);
};

var objectProduct : IProduct ={
    id: 1312,
    name : "Android",
    price: 16500,
    display(): void  {
        console.log(this.id + " "+ this.name);
    },
}