const Sale = require('../models/SalesModel')

// total revenue controllers
const TotalRevenue = async (req, res) => {
    try {
      const result = await Sale.aggregate([{ $group: { _id: null, totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } } } }]);
      res.json(result[0] || { totalRevenue: 0 });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // total quantity controllers
 const TotalQuantity =  async (req, res) => {
  try {
    const result = await Sale.aggregate([{ $group: { _id: '$product', totalQuantity: { $sum: '$quantity' } } }]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

 // Top product controllers
 const TopProduct =  async (req, res) => {
  try {
    const result = await Sale.aggregate([
      { $group: { _id: '$product', totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } } } },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 },
    ]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

 // average price controllers
 const AveragePrice =  async (req, res) => {
  try {
    const result = await Sale.aggregate([{ $group: { _id: null, averagePrice: { $avg: '$price' } } }]);
    res.json(result[0] || { averagePrice: 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// revenue by month controllers
 const RevenueByMonth =  async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$date' } },
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      },
    ]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// highest quantity controllers
const HighestQuantity =  async (req, res) => {
  try {
    const result = await Sale.findOne().sort({ quantity: -1 });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// department salary expense controllers
 const DepartmentSalaryExpense =  async (req, res) => {
  try {
    const result = await Sale.aggregate([{ $group: { _id: '$department', totalSalaryExpense: { $sum: '$price' } } }]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  TotalRevenue,
  TotalQuantity,
  TopProduct,
  AveragePrice,
  RevenueByMonth,
  HighestQuantity,
  DepartmentSalaryExpense

}




