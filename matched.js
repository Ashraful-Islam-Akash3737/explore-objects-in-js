const products = [
    {id: 1, name: "walton ac", price: 22000},
    {id: 2, name: "walton fridge", price: 12000},
    {id: 3, name: "lenevo laptop", price: 30000},
    {id: 4, name: "hp laptop", price: 70000},
    {id: 5, name: "mac book laptop", price: 100000},
    {id: 6, name: "iphone moblie", price: 120000},
    {id: 7, name: "samsung mobile", price: 25000},
];

function matchedProduct(products,search){
    let arr = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            arr.push(product.name);
        }
    }
    return arr;
}
const result = matchedProduct(products, "mob");
console.log(result);
