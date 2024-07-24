// 1. Create 10 variables
let books = 12;
let pens = 30;
let notebooks = 20;
let erasers = 15;
let markers = 10;
let folders = 8;
let calculators = 5;
let rulers = 7;
let staplers = 3;
let paperClips = 50;

// 2. Perform calculations(*operator) on vars and create new Vars
let totalStationery = books + pens + notebooks + erasers + markers + folders + calculators + rulers + staplers + paperClips;
let writingSupplies = pens * markers * rulers;
let officeSupplies = folders * staplers * paperClips;

// 3. Create 3 if Statements and test their outputs in console.
if (totalStationery > 100) {
    console.log('You have a lot of stationery items');
} else {
    console.log('You have a manageable amount of stationery items');
}

if (writingSupplies > 1000) {
    console.log('You have a lot of writing supplies');
} else {
    console.log('You have a reasonable amount of writing supplies');
}

if (officeSupplies > 500) {
    console.log('You have a lot of office supplies');
} else {
    console.log('You have a manageable amount of office supplies');
}

// 4. Use 2 Logical Operators
if (books > 10 && notebooks > 15) {
    console.log('You have more than 10 books and more than 15 notebooks');
}

if (calculators > 4 || erasers > 10) {
    console.log('You have more than 4 calculators or more than 10 erasers');
}

// 5. Interpolate All 10 of your variables in a console log
console.log(`Books: ${books}, Pens: ${pens}, Notebooks: ${notebooks}, Erasers: ${erasers}, Markers: ${markers}, Folders: ${folders}, Calculators: ${calculators}, Rulers: ${rulers}, Staplers: ${staplers}, PaperClips: ${paperClips}`);