// Second sample dataset for Worker Progress Report form
module.exports = {
    formInfo: {
      workerAppId: '712042',
      submitted: 'April 10, 2024 14:35',
      claimNo: '20042048',
    },
    workerInfo: {
      name: 'John Smith',
    },
    returnToWork: {
      status: 'I returned to work on:',
      returnDate: 'April 5, 2024',
      workType: 'Modified duties, reduced hours',
      expectedReturnDate: '',
      concerns: 'I am having difficulty with sitting for long periods',
      employerContact: {
        name: 'Sarah Johnson',
        contactDate: 'April 7, 2024',
      },
      missedTime: '',
      currentlyWorking: 'Part-time',
    },
    recovery: {
      status: 'I have not fully recovered from my workplace injury.',
      painLevel: 4, // 1-10 scale
      comments: 'Experiencing some back pain after sitting for more than 2 hours',
    },
    medicalTreatment: {
      continuing: 'I am continuing to receive medical treatment for my workplace injury from:',
      providerType: 'Physiotherapist',
      lastTreatment: {
        date: 'April 8, 2024',
        providerName: 'Kinestic Physiotherapy',
      },
      nextTreatment: {
        date: 'April 15, 2024',
        providerName: 'Kinestic Physiotherapy',
      },
      attendingSpecialist: 'I am attending a Chiropractor or Physiotherapist',
      frequency: '2 times per week',
    },
    medication: {
      taking: 'I am taking medication for my workplace injury:',
      medicationName: 'Naproxen 500mg',
    },
    homeExercises: {
      doing: 'I am doing home exercises for my workplace injury.',
      exercises: 'Lower back stretches, core strengthening exercises, walking program',
    },
    additionalInfo: 'My physiotherapist has recommended I continue with reduced hours for at least 2 more weeks.',
  };