const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  memberName: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  address: { type: Schema.Types.String },
  contactNumber: { type: Schema.Types.Number },
  role: { type: Schema.Types.String, default: "member", enum: ["admin", "member"] },
  referedByMemberId: { type: Schema.Types.ObjectId, ref: "member" },
  incentiveEarned: { type: Schema.Types.Number, default: 0 },
  nonWorkingIncentive: { type: Schema.Types.Number, default: 0 },
  level: { type: Schema.Types.Number, default: 0 },
  nonWorkingLevel: { type: Schema.Types.Number, default: 0 },
  password: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
  level1: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level2: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level3: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level4: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level5: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level6: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level7: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level8: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level9: [{ type: Schema.Types.ObjectId, ref: "member" }],
  level10: [{ type: Schema.Types.ObjectId, ref: "member" }],
});

const member = mongoose.model("member", memberSchema);

module.exports = member;
