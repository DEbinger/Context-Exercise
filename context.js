let Robot = function (name) {
  this.name = name;

};

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

let voltron = new Robot("Voltron");
let bender = new Robot("Bender Rodriguez");
let optimus = new Robot("Optimus Prime");
let megaman = new Robot("Mega Man");
let bmo = new Robot("B-Mo");
let wall_e = new Robot("Wall-E");


// #1
console.log(add(0, 1));

// #2  
console.log(add.call(voltron, 2, 3));

// #3
console.log(add.apply(optimus, [20, 30]));

// #4
let calculate = add.bind(bender);
console.log(calculate('drinking', 'beer'));