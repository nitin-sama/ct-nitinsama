const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

var listItem = document.querySelector(".list-item");
var ul = document.querySelector(".list");

// Using traditional if ----------

for (let i = 0; i < companies.length; i++) {
  //   var createElement = document.createElement("li");
  //   var companiesName = companies[i].name;
  //   createElement.append(companiesName);
  //   ul.appendChild(createElement);

  if (companies[i].category == "Auto") {
    // var createElement = document.createElement("li");
    // var companiesName = companies[i].name;
    // createElement.append(companiesName);
    // ul.appendChild(createElement);
  }
}

// Filter ----------

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// for (let i = 0; i < retailCompanies.length; i++) {
//   var createElement = document.createElement("li");
//   var companiesName = retailCompanies[i].name;
//   createElement.append(companiesName);
//   ul.appendChild(createElement);
// }

// const retention = companies.filter(function (company) {
//   if (company.end - company.start > 22) {
//     return true;
//   }
// });
// for (let i = 0; i < retention.length; i++) {
//   var createElement = document.createElement("li");
//   var companiesName = retention[i].name;
//   createElement.append(companiesName);
//   ul.appendChild(createElement);
// }

// Map ----------
const companyNames = companies.map(function (company) {
  return company.name;
});
for (let i = 0; i < companyNames.length; i++) {
  var createElement = document.createElement("li");
  var companiesName = companyNames[i];
  createElement.append(companiesName);
  ul.appendChild(createElement);
}

// Sort ---------
// companies
// const sortCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortCompanies);
// age
// const sortAge = ages.sort(function (a, b) {
//   return a - b;
// });
// console.log(sortAge);

// reduce ----------
// array
// const sumArray = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(sumArray);
// company
// const sumCompany = companies.reduce(function (total, years) {
//   return total + (years.end - years.start);
// }, 0);
// console.log(sumCompany);

// Combining all methods ---------
const combined = ages
  .map(function (age) {
    return age * 2;
  })
  .filter(function (age) {
    return age > 40;
  })
  .sort(function (a, b) {
    return a - b;
  })
  .reduce(function (total, age) {
    return total + age;
  }, 0);

console.log(combined);
