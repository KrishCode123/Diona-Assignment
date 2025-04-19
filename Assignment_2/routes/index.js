const express = require('express');
const router = express.Router();
delete require.cache[require.resolve('../data/progress-report-1')];
delete require.cache[require.resolve('../data/progress-report-2')];

const medicalExpense1 = require('../data/medical-expense-1');
const medicalExpense2 = require('../data/medical-expense-2');
const progressReport1 = require('../data/progress-report-1');
const progressReport2 = require('../data/progress-report-2');


router.get('/', (req, res) => {
  res.render('index', { title: 'WCB Forms' });
});


router.get('/medical-expense-1', (req, res) => {
  res.render('medical-expense', { 
    title: 'Medical & Travel Expense Request',
    data: medicalExpense1,
    dataset: '1'
  });
});

router.get('/medical-expense-2', (req, res) => {
  res.render('medical-expense', { 
    title: 'Medical & Travel Expense Request',
    data: medicalExpense2,
    dataset: '2'
  });
});


router.get('/progress-report-1', (req, res) => {
  res.render('progress-report', { 
    title: 'Worker Progress Report',
    data: progressReport1,
    dataset: '1'
  });
});

router.get('/progress-report-2', (req, res) => {
  res.render('progress-report', { 
    title: 'Worker Progress Report',
    data: progressReport2,
    dataset: '2'
  });
});

module.exports = router;