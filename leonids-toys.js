const toys = [ 
{
id: 1,
name: " Car",
color: "Blue",
maker: "Hot Wheels",
price: 1.99,
},
{
id: 2,
name: "Simon",
color: "Black",
maker:  "Hasbro",
price: 19.82
},
{
    id: 3,
    name: "Doll",
    color: "Brown",
    maker: "America Girl",
    price: 83.90
}
] 

                    


const xboxOne = {
    name: "Xboxone",
    color: "white",
    maker: "Microsoft",
    price: 300
}

const Switch = {
    name: "Switch",
    maker: "Nintendo",
    color: "Black",
    price: 299.99
}



const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    
    toyObject.id = idForNewToy
    toys.push(toyObject)
    
}
addToyToInventory(xboxOne)
addToyToInventory(Switch)

// Step through the array of toys
for (const toy of toys) {
   toy.price = toy.price + 0.05
   //Add the weight to the output
   console.log(`The ${toy.name} is ${toy.color} and cost ${toy.price} dollars.`)
} 
console.log(toys)