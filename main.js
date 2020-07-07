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

const kata4 = users.find(user => user.age > 38)
printKata(4, kata4)

const kata5 = users.filter(user => user.isActive === true)
const kata5search = kata5.find(user => user.age > 38)
printKata(5, kata5search)