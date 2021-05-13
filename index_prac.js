function CustomerDetails(name,age,salary){

    this.age=age;
    this.name=name;
    this.salary=salary
}

var cus1=new CustomerDetails('Adrian',23,500000)

cus1.sex='Male'
console.log(cus1);