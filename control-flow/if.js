const personPrototype = {
  canGetLicense() {
    if (this.age < 16) {
      console.log(`${this.name} must be at least 16`);
      return false;
    }
    if (!this.completedDriversEd) {
      console.log(`${this.name} must complete driver's education`);
      return false;
    }
    console.log(`${this.name} can get their license`);
    return true;
  },
};

function createPerson(name, age, completedDriversEd) {
  const person = Object.create(personPrototype);
  person.name = name;
  person.age = age;
  person.completedDriversEd = completedDriversEd;

  return person;
}

const bob = createPerson("Bob", 15, false);
const wilma = createPerson("Wilma", 17, true);
const tina = createPerson("Tina", 25, false);
const candidates = [bob, wilma, tina];

for (const candidate of candidates) {
  candidate.canGetLicense();
}
