const mongoose = require("mongoose");
const { Schema } = mongoose;

const finalIncentiveArrayBackupSchema = new Schema({
  earnedFromMemberId: { type: Schema.Types.ObjectId, ref: "member" },
  finalIncentives: [
    {
      memberId: { type: Schema.Types.ObjectId, ref: "member" },
      money: { type: Schema.Types.Number },
    },
  ],
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const finalIncentiveArrayBackup = mongoose.model("finalIncentiveArrayBackup", finalIncentiveArrayBackupSchema);

module.exports = finalIncentiveArrayBackup;
