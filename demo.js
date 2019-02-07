console.log('The demo has started');


const selectEngineer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const err = new Error('Unknown Engineer Errror!!!! soemthing terrible went wrong!!!');
            // reject(err);
            return;
            const engineers = ['Alan', 'Azim', 'Becky', 'James', 'Jesse', 'Jin', 'Joshua', 'Paul'];
            const randInt = Math.floor(Math.random() * engineers.length);
            resolve(engineers[randInt]);
            }, 1000);
    })
};


const appendNumSlices = (engineer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numSlices = Math.floor(Math.random() * 8 + 1);
            resolve(`${engineer} would like ${numSlices} slices`);
        }, 1000);
    })
};

const getDesire = (incompleteDesire) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foodTypes = ['Pizza', 'Pie', 'Cake', 'Oranges'];
            const randInt = Math.floor(Math.random() * foodTypes.length);
            const foodType = foodTypes[randInt];
            resolve(`${incompleteDesire} of ${foodType}`);
        }, 1000);
    })
};

// Basic Promises
selectEngineer().then((engineer) => {
    console.log(engineer);
});

appendNumSlices('Andy').then((incompleteDesire) => {
    console.log(incompleteDesire);
});

getDesire('James would like 8 slices').then(desire => {
    console.log(desire);
});


//Chaining Promises
selectEngineer().then(engineer => {
    return appendNumSlices(engineer);
}).then(incompleteDesire => {
    return getDesire(incompleteDesire);
}).then(desire => {
    console.log(desire);
});

//Promise.all
const promises = [selectEngineer(), appendNumSlices('Jin'), getDesire('Alan would like 3 slices')];
Promise.all(promises).then((results) => {
    console.log('result1 ', results[0]);
    console.log('result2 ', results[1]);
    console.log('result3 ', results[2]);
});

// Handling Errors

// selectEngineer().then(engineer => {
//     return appendNumSlices(engineer);
// }).then(incompleteDesire => {
//     return getDesire(incompleteDesire);
// }).then(desire => {
//     console.log(desire);
// }).catch(error => {
//     console.error(error);
// });

