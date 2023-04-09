class person {
  constructor(fname, lname, dob) {
    this.firstname = fname;
    this.lastname = lname;
    this.birthdate = dob;
  }

  getAge() {
    let birth = new Date(this.birthdate);
    let diff = Date.now() - birth.getTime();
    let age = new Date(diff);
    return `Year:${
      age.getUTCFullYear() - 1970
    } Month:${age.getUTCMonth()} Day:${age.getUTCDate()}`;
  }
  fullname() {
    console.log(`${this.firstname} ${this.lastname}`);
  }
}

class customer extends person {
  constructor(fname, lname, dob, phone, email) {
    super(fname, lname, dob);
    this.phone = parseInt(phone);
    this.email = email;
  }

  phoneandemail() {
    console.log(`${this.phone} and ${this.email}`);
  }

  static call() {
    console.log(`call me on emergencey`);
  }
}

let c1 = new customer(
  "Eftekher",
  "Ali Efte",
  "07-06-2000",
  "01798887910",
  "eftekherali200@gmail.com"
);

c1.fullname();
console.log(c1.getAge());

c1.phoneandemail();

console.log(customer.call());
