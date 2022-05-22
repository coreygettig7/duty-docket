const faker = require('faker');
const db = require('../config/connection');
const { Duty, User } = require('../models');

db.once('open', async () => {
  await Duty.deleteMany({});
  await User.deleteMany({});

  // create userData 
  const userData = [];
  for (let i = 0; i < 5; i+= 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }
  // push that created information into the user db
  const userSeeds = await User.collection.insertMany(userData);

  // create Duties
  const dutySeeds = [];
  const distinctions = ['Not Started', 'In Progress', 'Completed'];
  for (let i = 0; i < 20; i +=1 ) {
    const dutyText = faker.lorem.words(Math.round(Math.random() * 20 ) + 1);
    // get user
    const userIndex = Math.floor(Math.random() * userSeeds.ops.length);
    const { username, _id: userId } = userSeeds.ops[userIndex];
    // create distinction
    const distinctionIndex = Math.floor(Math.random() * distinctions.length);
    const dutyDistinction  = distinctions[distinctionIndex];
    // create deposit
    const dutyDeposit = faker.finance.amount(1, 50);
    // create due Date
    const dueDate = faker.date.between('2022-05-10', '2022-06-30');
    // create the duty
    const newDuty = await Duty.create({ dutyText, username, dutyDistinction, dutyDeposit, dueDate })
    // update the user who made this duty
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { duties: newDuty._id } }
    );
    dutySeeds.push(newDuty);
  }

  // create doers
  for (let i = 0; i < 12; i += 1) {
    const name = faker.name.firstName();

    const userIndex = Math.floor(Math.random() * userSeeds.ops.length);
    const { username } = userSeeds.ops[userIndex];

    const dutyIndex = Math.floor(Math.random() * dutySeeds.length);
    const { _id: dutyId } = dutySeeds[dutyIndex];

    await Duty.updateOne(
      { _id: dutyId},
      { $push: { dutyDoer: { name, username } } },
      { runValidators: true }
    )
  }
  console.log('seeding complete! ✅');
  process.exit(0);
})
