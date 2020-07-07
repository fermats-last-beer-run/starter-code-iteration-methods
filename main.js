// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const kata1 = users.filter(user => user.isActive === true)
printKata(1, kata1)

const kata2 = users.map(user => user.email)
printKata(2, kata2)

const kata3 = users.some(users => users.company === "OVATION")
printKata(3, kata3)

const kata4 = users.find(user => user.age >= 38)
printKata(4, kata4)

let kata5 = users.filter(user => user.isActive === true)
printKata(5, kata5.find(user => user.age >= 38))
console.log("KATA5 might be undefined, but - unless it is Monroe Mosley's exact moment of birth - he is technically older than 38 if only by a few seconds.")

let kata6 = users.filter(user => user.company = "ZENCO")
printKata(6, kata6.map(user => user.balance))

let kata7 = users.filter(user => user.tags.includes("fugiat") === true)
printKata(7, kata7.map(user => user.age))