// Second sample dataset for Medical Expense Request form (with different data)
module.exports = {
    formInfo: {
      workerAppId: '712042',
      submitted: 'April 02, 2024 15:20',
      claimNo: '20042048'
    },
    workerInfo: {
      name: 'John Smith'
    },
    prescriptionDrugs: [
      {
        drugName: 'Tramadol',
        prescriptionDate: 'March 15, 2024',
        datePurchased: 'March 16, 2024',
        healthcareProviderName: 'Dr. Johnson',
        paidAmount: '$25.50'
      },
      {
        drugName: 'Cyclobenzaprine',
        prescriptionDate: 'March 20, 2024',
        datePurchased: 'March 21, 2024',
        healthcareProviderName: 'Dr. Johnson',
        paidAmount: '$18.75'
      }
    ],
    overTheCounterDrugs: [
      {
        drugName: 'Tylenol',
        datePurchased: 'April 01, 2024',
        paidAmount: '$6.99',
        sellersName: 'Walmart Pharmacy',
        reasonForPurchasing: 'Headache'
      },
      {
        drugName: 'Voltaren Gel',
        datePurchased: 'March 25, 2024',
        paidAmount: '$12.49',
        sellersName: 'London Drugs',
        reasonForPurchasing: 'Joint Pain'
      }
    ],
    medicalSupplies: [
      {
        itemPurchased: 'Wrist Brace',
        datePurchased: 'March 22, 2024',
        wasPrescribed: 'Yes',
        healthcareProviderName: 'Dr. Johnson',
        paidAmount: '$35.99',
        sellersName: 'Medical Supply Store'
      },
      {
        itemPurchased: 'Hot/Cold Pack',
        datePurchased: 'March 30, 2024',
        wasPrescribed: 'No',
        healthcareProviderName: '',
        paidAmount: '$15.75',
        sellersName: 'Shoppers Drug Mart'
      }
    ],
    parking: [
      {
        addressOfProvider: '500 Main St, Winnipeg MB R3B 1B7, Canada',
        appointmentDate: 'March 26, 2024',
        paidAmount: '$8.50',
        meterUsed: 'yes',
        meterNumber: '76543'
      },
    ],
    mileage: [
      {
        appointmentDate: 'March 26, 2024',
        addressOfProvider: '500 Main St, Winnipeg MB R3B 1B7, Canada',
        addressOfWorkplace: '201 Portage Ave, Winnipeg MB R3B 3K6, Canada',
        kilometers: '15 km'
      },
    ],
    busOrTaxi: [
      {
        appointmentDate: 'March 29, 2024',
        startingPoint: '201 Portage Ave, Winnipeg MB R3B 3K6, Canada',
        destination: '500 Main St, Winnipeg MB R3B 1B7, Canada',
        transportType: 'Bus',
        totalFare: '$3.00'
      }
    ]
  };