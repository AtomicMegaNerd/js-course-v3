function printGreeting(firstName, lastName, f) {
  const fullName = `${firstName} ${lastName}`
  console.log(f(fullName))
}

function getGreeting(name) {
  return `Hello ${name}`
}

printGreeting("Chris", "Dunphy", getGreeting)
