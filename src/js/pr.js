// // add items to local storage
// // it is stored in key value format as strings
// localStorage.setItem('name', 'Bart');

// // replace one of the items value
// localStorage.setItem('name', 'Lisa');

// // access the local storage
// console.log(localStorage.getItem('name'));

// // remove an entry
// localStorage.removeItem('name');

// // set few more
// localStorage.setItem('name', 'Lisa');
// localStorage.setItem('firstName', 'Lisa');
// localStorage.setItem('lastName', 'Lisa');

// // // clear 
// // localStorage.clear();

// // When working with arrays and local storage we will need to convert the array to string and the parse it back

// const goals = ['Run 10K', 'Complete Quiz', 'Work Out'];
// localStorage.setItem('items', JSON.stringify(goals));
// const goalsFromLocalStorage = JSON.parse(localStorage.getItem('goals'));
// console.log(goalsFromLocalStorage);


