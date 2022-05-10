const faker = require('faker');

const db = require('../config/connection');
const { User, Duty } = require('../models');

db.once('open', async () => {

    await Duty.deleteMany({});
    const dutyData = [];

    for (let i = 0; i < 50; i += 1) {
        const dutyName = faker.commerce.department();
        const dutyValue = faker.commerce.price();
        const dutyDescription = faker.commerce.product();

        dutyData.push( { dutyName, dutyValue, dutyDescription });
    }

    let createdDuties = [];
    createdDuties = await Duty.collection.insertMany(dutyData);
        // [
        //     {
        //         dutyName: "Dishes",
        //         dutyValue: 5.00,
        //         dutyDescription: "Wash, Dry and put away Dishes"
        //     },
        //     {
        //         dutyName: "Floors",
        //         dutyValue: 2.00,
        //         dutyDescription: "Vacuum all floors downstairs"
        //     },
        //     {
        //         dutyName: "Make Bed",
        //         dutyValue: 1.00,
        //         dutyDescription: "Make bed every morning"
        //     },
        //     {
        //         dutyName: "Trash",
        //         dutyValue: 1.00,
        //         dutyDescription: "Empty all trash cans on trash day"
        //     },
        //     {
        //         dutyName: "Bathrooms",
        //         dutyValue: 10.00,
        //         dutyDescription: "Clean all sinks, showers, tubs, toilets and floors"
        //     },
        //     {
        //         dutyName: "Dusting",
        //         dutyValue: 3.00,
        //         dutyDescription: "Dust all of downstairs"
        //     }
        // ]);
        console.log('duties seeded')

    await User.deleteMany({});
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push( { username, email, password });
    }

    let createdUsers = [];
    createdUsers = await User.collection.insertMany(userData);

    console.log('users seeded')

      // create dependents
  const dependentData = [];
  for ( let i = 0; i < 3; i += 1) {
    const {dependentName} = faker.name.firstName();
    // find a random user from the fakeUsers array and get that userId
    const randomUserIndex = Math.floor(Math.random() * dependentData.length);
    const username  = dependentData[randomUserIndex];

    // update user dependent array
    await User.updateOne({ username }, { $addToSet: { dependents: dependentName } });
  }
  console.log('dependents seeded')

    // for (let i = 0; 1 < 50; i += 1) {
    //     const randomUserIndex = Math.floor(Math.random() * userData.length);
    //     const { _id: userId } = userData[randomUserIndex];

    //     let dependentId = userId;

    //     while (dependentId === userId) {
    //         const randomUserIndex = Math.floor(Math.random() * userData.length);
    //         dependentId = userData[randomUserIndex]
    //     }
    //     await User.updateOne({ _id: userId }, { $addToSet: { dependents: dependentId } } );
    // }
    // console.log('dependents seeded')



console.log('all done!');
process.exit(0);
});

