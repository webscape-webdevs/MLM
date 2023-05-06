const MemberSchema = require("../schemas/memberSchema");
const ReferencesSchema = require("../schemas/referenceSchema");
const nonWorkingIncentiveSchema = require("../schemas/referenceSchema");

const nonWorkingRewards = async () => {
  let completed = true;

  const MembersArray = await MemberSchema.find().sort({ createdAt: 1 });

  let MembersArrayLength = MembersArray.length - 1;

  if (MembersArray) {
    for (let i = 1; i <= MembersArrayLength; i++) {
      let membersJoinedAfter = MembersArrayLength - i;

      if (membersJoinedAfter >= 2097151) {
        if (MembersArray[i].nonWorkingLevel !== 10) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 10 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 10 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 636000, reEntries: 128, rewards: "Bike or 60,000" }),
          ]);
        }
      } else if (membersJoinedAfter >= 524287) {
        if (MembersArray[i].nonWorkingLevel !== 9) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 9 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 9 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 168000, reEntries: 64, rewards: "Laptop or 20,000" }),
          ]);
        }
      } else if (membersJoinedAfter >= 131071) {
        if (MembersArray[i].nonWorkingLevel !== 8) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 8 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 8 } }),
            nonWorkingIncentiveSchema.create({
              memberId: MembersArray[i]._id,
              incentiveEarned: 44000,
              reEntries: 32,
              rewards: "Smart Phone or 14,400",
            }),
          ]);
        }
      } else if (membersJoinedAfter >= 32767) {
        if (MembersArray[i].nonWorkingLevel !== 7) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 7 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 7 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 18000, reEntries: 16, reJoinings: 4 }),
          ]);
        }
      } else if (membersJoinedAfter >= 8191) {
        if (MembersArray[i].nonWorkingLevel !== 6) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 6 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 6 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 3200, reEntries: 8, reJoinings: 2 }),
          ]);
        }
      } else if (membersJoinedAfter >= 2047) {
        if (MembersArray[i].nonWorkingLevel !== 5) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 5 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 5 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 1500, reEntries: 4, reJoinings: 1 }),
          ]);
        }
      } else if (membersJoinedAfter >= 511) {
        if (MembersArray[i].nonWorkingLevel !== 4) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 4 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 4 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 700, reEntries: 2, rewards: "ATM Bag" }),
          ]);
        }
      } else if (membersJoinedAfter >= 127) {
        if (MembersArray[i].nonWorkingLevel !== 3) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 3 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 3 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 300, reEntries: 1, rewards: "ATM Tshirt" }),
          ]);
        }
      } else if (membersJoinedAfter >= 31) {
        if (MembersArray[i].nonWorkingLevel !== 2) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 2 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 2 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 200 }),
          ]);
        }
      } else if (membersJoinedAfter >= 7) {
        if (MembersArray[i].nonWorkingLevel !== 1) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: MembersArray[i]._id }, { $set: { nonWorkingLevel: 1 } }),
            ReferencesSchema.findOneAndUpdate({ memberId: MembersArray[i]._id }, { $set: { nonWorkingLevel: 1 } }),
            nonWorkingIncentiveSchema.create({ memberId: MembersArray[i]._id, incentiveEarned: 100 }),
          ]);
        }
      }
    }
  }

  return completed;
};

module.exports = { nonWorkingRewards };
