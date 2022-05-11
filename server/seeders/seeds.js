const faker = require('faker');
const db = require('../config/connection');
const { Duty, User } = require('../models');
const Dependent = require('../models/Dependent');

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

  // create duties
  let fakeDuties = [];
  for (let i = 0; i< 10; i += 1) {
    const dutyText = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    // find a random user who is going to create the duty,
    const randomUserIndex = Math.floor(Math.random() * fakeUsers.ops.length);
    // get & set the username of that user
    const { username, _id: userId } = fakeUsers.ops[randomUserIndex];

    // create the duty, baby
    const singleDuty = await Duty.create({ dutyText, username });
    // update the user
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { duties: singleDuty._id } }
    )
    fakeDuties.push(singleDuty);
  }



  // create dependents
  for ( let i = 0; i < 6; i += 1) {
    const dependentName = faker.name.firstName();
    const randomUserIndex = Math.floor(Math.random() * fakeUsers.ops.length);
    const { username } = fakeUsers.ops[randomUserIndex];

    const randomDutyIndex = Math.floor(Math.random() * fakeDuties.length);
    const { _id: dutyId } = fakeDuties[randomDutyIndex];
    //console.log({_id: dutyId })

    await Duty.updateOne(
      { _id: dutyId },
      { $push: { dependent: { dependentName, username } } },
      { runValidattors: true }
    )
  }

  console.log('all done seeding!');
  process.exit(0);
});