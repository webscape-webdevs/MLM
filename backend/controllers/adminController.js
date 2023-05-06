// const DirectSalesIncentiveSchema = require("../schemas/directSalesIncentiveSchema");
const createError = require("http-errors");

const adminController = {
  getData: async (req, res, next) => {
    // try {
    //   const data = await DirectSalesIncentiveSchema.aggregate([
    //     { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: "$incentiveEarned" } } },
    //     { $sort: { _id: 1 } },
    //   ]);
    //   res.status(201).json({ data });
    // } catch (error) {
    //   return next(createError.InternalServerError(error));
    // }
  },
};

module.exports = adminController;
