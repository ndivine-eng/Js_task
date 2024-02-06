const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const cheapItem = items.filter((item) => item.price <= 10)
console.log(items)
// 2. Filter and show the product that will be expensive in the array
const expProduct = items.filter((item) => item.price > 500)
console.log(expProduct)  
// 3. Calculate the full price of all products combined
const totalPrice =items.reduce((sum, item)=> sum+item.price, 0)
console.log(totalPrice)
// 4. Calculate the full price of all products combined and remove products that are under $10
const totalPriceExcludingCheap = items.filter(item => item.price >=  10).reduce((sum, item) => sum + item.price,  0);
console.log(totalPriceExcludingCheap);

// 5. Filter and show the product that will be start with letter b at first postion
const bStartingItems = items.filter(item => item.name.charAt(0).toLowerCase() === 'b');
console.log(bStartingItems);






