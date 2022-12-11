// we do only declaration in interfaces 
;
var objProduct = {
    id: 123,
    name: "IPhone",
    price: 60000,
    display: function () {
        console.log(this.id, +" " + this.name);
    }
};
// traverse this object using for loop
for (var key in objProduct) {
    console.log(key);
}
;
var objectProduct = {
    id: 1312,
    name: "Android",
    price: 16500,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
