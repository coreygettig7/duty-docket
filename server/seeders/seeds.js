const faker = require('faker');

const db = require('../config/connection');
const { Duty, User } = require('../models');

db.once('open', async () => {
  // clear existing info in db
  await Duty.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 5; i+= 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }
  // push that created information into the user db
  const fakeUsers = await User.collection.insertMany(userData);


  // create dependents
  const dependentData = [];
  for ( let i = 0; i < 3; i += 1) {
    const {dependentName} = faker.name.firstName();
    // find a random user from the fakeUsers array and get that userId
    const randomUserIndex = Math.floor(Math.random() * fakeUsers.ops.length);
    const { username } = fakeUsers.ops[randomUserIndex];

    // update user dependent array
    await User.updateOne({ username }, { $addToSet: { dependents: dependentName } });
  }

  // create duties
  let fakeDuties = [];
  for (let i = 0; i< 10; i += 1) {
    const dutyText = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    // find a random user who is going to create the duty,
    const randomUserIndex = Math.floor(Math.random() * fakeUsers.ops.length);
    // get & set the username of that user
    const { username, _id: userId } = fakeUsers.ops[randomUserIndex];
    const {dependent} = faker.name.firstName();

    // create the duty, baby
    const singleDuty = await Duty.create({ dutyText, username, dependent });
    
    // create a random name for the dependent
  
    // const randomDutyIndex = Math.floor(Math.random() * fakeDuties.length);
    // const { _id: dutyId } = fakeDuties[randomDutyIndex];

    // // await Duty.updateOne(
    // //   { _id: dutyId },
    // //   { $push: { dependent: dependent }}
    // // )

    // // update the user model
    // const updatedUser = await User.updateOne(
    //   { _id: userId },
    //   {$push: { duties: singleDuty._id } },
    //   { $push: { dependents: dependent}}
    // );
    fakeDuties.push(singleDuty);

  }


  console.log('all done seeding!');
  process.exit(0);
});