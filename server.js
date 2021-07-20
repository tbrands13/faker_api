const express = require("express");
const cors = require("cors");
const faker = require("faker");
const port = 8000;
const app = express();



app.use(cors());
app.use(express.json());


class User{
    constructor(){
        this._id = faker.finance.bitcoinAddress();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            country: faker.address.country()
        }
    }
}

const person1 = new User()
console.log("ID:", person1._id)
console.log("First Name:", person1.firstName)
console.log("Last Name:", person1.lastName)
console.log("Phone:", person1.phoneNumber)
console.log("Email:", person1.email)
console.log("Password:", person1.password)


const company1 = new Company()
console.log("ID:", company1._id)
console.log("Company Name:", company1.name)
console.log("Address:", company1.address)


// app.get("/api/spider", (req, res) => {
//     res.json({message: "With great power, comes great responsibility"});
// });

app.get("/api/users/new",(req,res)=>{
    const person1 = new User()
    return res.json({NewPerson: person1})
})

app.get("/api/companies/new", (req,res)=>{
    const company1 = new Company()
    return res.json({newCompany: company1})
})

app.get("/api/user/company", (req,res)=>{
    const person1 = new User()
    const company1 = new Company()
    return res.json({userAndCompany: person1, company1})
})


app.listen(port, () => console.log(`Running on port ${port}`));