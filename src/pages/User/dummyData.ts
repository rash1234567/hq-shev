export const trialBalance = [
    {
      type: 'assets',
      subs: [
        {
          name: 'Receivable',
          credit: '5,000',
          debit: '4,000',
          transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
        },
        {
            name: 'Cash',
            credit: '10,000',
          debit: '8,000',
             transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
          },
      ],
    },
    {
      type: 'assets',
      subs: [
        {
          name: 'Cash',
          credit: '10,000',
          debit: '8,000',
          transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
        },
      ],
    },
    {
      type: 'liabilities',
      subs: [
        {
          name: 'Accounts Payable',
          credit: '3,000',
          debit: '2,000',
            transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
        },
      ],
    },
    {
      type: 'equity',
      subs: [
        {
          name: 'Retained Earnings',
          credit: '15,000',
          debit: '14,000',
          transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
        },
      ],
    },
    {
      type: 'expenses',
      subs: [
        {
          name: 'Rent',
          credit: '2,000',
          debit: '2,500',
          transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
        },
      ],
    },
    {
      type: 'revenues',
      subs: [
        {
          name: 'Sales',
          credit: '20,000',
          debit: '18,000',
          transactions: [
            {
              amount: '15,000',
              description: 'blah blah',
              date: '12/06/2022'
            }
          ]
        },
      ],
    },
  ];
  