const express = require('express')
const salesAnalytics = require('../controllers/TotalRevenue')
const router = express.Router()

router.get('/sales/total-revenue',salesAnalytics.TotalRevenue)
router.get('/sales/quantity-by-product',salesAnalytics.TotalQuantity)
router.get('/sales/top-products',salesAnalytics.TopProduct)
router.get('/sales/average-price',salesAnalytics.AveragePrice)
router.get('/sales/revenue-by-month',salesAnalytics.RevenueByMonth)
router.get('/sales/highest-quantity-sold',salesAnalytics.HighestQuantity)
router.get('/sales/department-salary-expense',salesAnalytics.DepartmentSalaryExpense)





module.exports = router