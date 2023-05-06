const { incentiveUtil } = require("./nestedChildren");

const MemberSchema = require("../schemas/memberSchema");
const ReferenceSchema = require("../schemas/referenceSchema");
const LeadershipRewards = require("../schemas/leadershipRewardsSchema");

const finalIncentiveUtility = async (array, memberId) => {
  const data = await array.filter((e) => e.memberId.toString() === memberId.toString());

  const incentiveArray = await incentiveUtil(array, data[0]);

  const finalArray = [data[0], ...incentiveArray];

  // finalArray.map((e) => {
  //   console.log(e.branch);
  // });

  let finalIncentives = [];

  let money = [100, 50, 25, 25, 20, 15, 10];

  for (let i = 0; i < finalArray.length; i++) {
    if (finalArray[i].referedByMemberId) {
      if (finalArray[i].branch === "branchA" || finalArray[i].branch === "branchB") {
        //   console.log(finalArray[i].branch);
        if (money[i]) {
          let memberId = finalArray[i].referedByMemberId;
          let currentMoney = money[i];
          let data = { memberId: memberId, money: currentMoney };
          finalIncentives.push(data);
        }

        const parent = await MemberSchema.findOne({ _id: finalArray[i].referedByMemberId }).lean();

        // console.log(parent);

        if (i === 0) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level1: [...parent.level1, memberId] } });
        } else if (i === 1) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level2: [...parent.level2, memberId] } });

          let count = parent.level2.length + 1;

          if (parent.level === 1 && count === 6) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ]);
          }
        } else if (i === 2) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level3: [...parent.level3, memberId] } });

          let count = parent.level3.length + 1;

          if (parent.level === 2 && count === 18) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "ATM Bag or Rs 320" }),
            ]);
          }
        } else if (i === 3) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level4: [...parent.level4, memberId] } });

          let count = parent.level4.length + 1;

          if (parent.level === 3 && count === 54) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Smart Watch - Rs 1700" }),
            ]);
          }
        } else if (i === 4) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level5: [...parent.level5, memberId] } });

          let count = parent.level5.length + 1;

          if (parent.level === 4 && count === 162) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Mobile Phone - Rs 20,000" }),
            ]);
          }
        } else if (i === 5) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level6: [...parent.level6, memberId] } });

          let count = parent.level6.length + 1;

          if (parent.level === 5 && count === 486) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Laptop - Rs 30,000" }),
            ]);
          }
        } else if (i === 6) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level7: [...parent.level7, memberId] } });

          let count = parent.level7.length + 1;

          if (parent.level === 6 && count === 1458) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Bike - Rs 2,00,000" }),
            ]);
          }
        } else if (i === 7) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level8: [...parent.level8, memberId] } });

          let count = parent.level8.length + 1;

          if (parent.level === 7 && count === 4374) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Car - Rs 68,00,000" }),
            ]);
          }
        } else if (i === 8) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level9: [...parent.level9, memberId] } });

          let count = parent.level9.length + 1;

          if (parent.level === 8 && count === 13122) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Flat - Rs 6,00,00,000" }),
            ]);
          }
        } else if (i === 9) {
          await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level10: [...parent.level10, memberId] } });

          let count = parent.level10.length + 1;

          if (parent.level === 9 && count === 39366) {
            await Promise.all([
              MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
              LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Cheque - 80,00,00,000" }),
            ]);
          }
        }
      } else {
        if (i !== 0) {
          // console.log(i);
          let memberId = finalArray[i].referedByMemberId;
          if (i === 1) {
            if (finalArray[0].branch === "branchA" || finalArray[0].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            }
          } else if (i === 2) {
            if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            }
          } else if (i === 3) {
            if (
              finalArray[1].branch === "branchA" ||
              finalArray[1].branch === "branchB" ||
              finalArray[2].branch === "branchA" ||
              finalArray[2].branch === "branchB"
            ) {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            }
          } else if (i === 4) {
            if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 25 };
              finalIncentives.push(data);
            }
          } else if (i === 5) {
            if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 25 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 20 };
              finalIncentives.push(data);
            }
          } else if (i === 6) {
            if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 25 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 20 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 15 };
              finalIncentives.push(data);
            }
          } else if (i === 7) {
            if (finalArray[6].branch === "branchA" || finalArray[6].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
              let data = { memberId: memberId, money: 25 };
              finalIncentives.push(data);
            } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 20 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 15 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 10 };
              finalIncentives.push(data);
            }
          } else if (i === 8) {
            if (finalArray[7].branch === "branchA" || finalArray[7].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (finalArray[6].branch === "branchA" || finalArray[6].branch === "branchB") {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
              let data = { memberId: memberId, money: 25 };
              finalIncentives.push(data);
            } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
              let data = { memberId: memberId, money: 20 };
              finalIncentives.push(data);
            } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 15 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 10 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 5 };
              finalIncentives.push(data);
            }
          } else if (i === 9) {
            if (finalArray[8].branch === "branchA" || finalArray[8].branch === "branchB") {
              let data = { memberId: memberId, money: 200 };
              finalIncentives.push(data);
            } else if (finalArray[7].branch === "branchA" || finalArray[7].branch === "branchB") {
              let data = { memberId: memberId, money: 150 };
              finalIncentives.push(data);
            } else if (finalArray[6].branch === "branchA" || finalArray[6].branch === "branchB") {
              let data = { memberId: memberId, money: 100 };
              finalIncentives.push(data);
            } else if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
              let data = { memberId: memberId, money: 50 };
              finalIncentives.push(data);
            } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
              let data = { memberId: memberId, money: 25 };
              finalIncentives.push(data);
            } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
              let data = { memberId: memberId, money: 20 };
              finalIncentives.push(data);
            } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
              let data = { memberId: memberId, money: 15 };
              finalIncentives.push(data);
            } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
              let data = { memberId: memberId, money: 10 };
              finalIncentives.push(data);
            } else if (
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
              (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
            ) {
              let data = { memberId: memberId, money: 5 };
              finalIncentives.push(data);
            } else {
              let data = { memberId: memberId, money: 0 };
              finalIncentives.push(data);
            }
          }
        } else {
          let memberIdParent = finalArray[i].referedByMemberId;

          let data = { memberId: memberIdParent, money: 300 };
          finalIncentives.push(data);

          const parent = await MemberSchema.findById(finalArray[i].referedByMemberId);

          if (parent) {
            const level1 = [...parent.level1, memberId];
            const update = { $set: { level1 }, $inc: { level: 1 } };

            await Promise.all([
              MemberSchema.findByIdAndUpdate(parent._id, update),
              ReferenceSchema.updateOne({ memberId: parent._id }, { $inc: { level: 1 } }),
            ]);
          }
        }
      }
    } else {
      break;
    }
  }

  finalIncentives.map((e) => {
    console.log(e);
  });

  return finalIncentives;
};

module.exports = { finalIncentiveUtility };
