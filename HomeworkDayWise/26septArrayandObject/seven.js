// C)
let company = {
  name: "TechCorp",
  departments: {
    hr: { employees: 5 },
    dev: { employees: 20 }
  }
};

// TODO: Use structuredClone to deep copy `company`.
// Increase employees in dev department in copied object.
// Verify that original company object does not change.

const deepcopy=structuredClone(company);

deepcopy.departments.dev.employees='9' 
console.log(deepcopy);
// Vefification of company does not change employees 
console.log(company);
