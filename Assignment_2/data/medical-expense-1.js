// First sample dataset for Medical Expense Request form
module.exports = {
    formInfo: {
      workerAppId: '712041',
      submitted: 'March 28, 2024 20:43',
      claimNo: '20042047'
    },
    workerInfo: {
      name: 'Madeleine Willson'
    },
    prescriptionDrugs: [
      {
        drugName: 'Naproxen',
        prescriptionDate: 'February 28, 2024',
        datePurchased: 'February 29, 2024',
        healthcareProviderName: 'Dr. Best',
        paidAmount: '$20.00'
      }
    ],
    overTheCounterDrugs: [
      {
        drugName: 'Advil',
        datePurchased: 'March 28, 2024',
        paidAmount: '$8.00',
        sellersName: 'Shoppers Drug Mart',
        reasonForPurchasing: 'Pain'
      }
    ],
    medicalSupplies: [
      {
        itemPurchased: 'Tensor',
        datePurchased: 'February 28, 2024',
        wasPrescribed: 'Yes',
        healthcareProviderName: 'Dr. Best',
        paidAmount: '$10.00',
        sellersName: 'Shoppers DrugMart'
      }
    ],
    parking: [
      {
        addressOfProvider: '333 St Mary Ave, Winnipeg MB R3C4A5, Canada',
        appointmentDate: 'March 28, 2024',
        paidAmount: '$10.00',
        meterUsed: 'yes',
        meterNumber: '12245'
      }
    ],
    mileage: [
      {
        appointmentDate: 'March 28, 2024',
        addressOfProvider: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada',
        addressOfWorkplace: 'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada',
        kilometers: '20 km'
      }
    ],
    busOrTaxi: [
      {
        appointmentDate: 'March 28, 2024',
        startingPoint: '',
        destination: 'HSC Winnipeg Women\'s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada',
        transportType: 'Bus',
        totalFare: '$3.00'
      },
      {
        appointmentDate: 'March 27, 2024',
        startingPoint: '25 Furby St, Winnipeg MB R3C 2A2, Canada',
        destination: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada',
        transportType: 'Taxi',
        totalFare: '$15.00'
      }
    ]
  };