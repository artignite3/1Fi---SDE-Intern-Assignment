# EMI Calculation API Endpoint (src/app/api/emi/calculate/)

Provides real-time financial calculations for 0% No-Cost EMI plans and required Mutual Fund lien collateral.

---

## Endpoint Details

- **Route**: POST /api/emi/calculate
- **Request Body**:
  `json
  {
    "amount": 129900,
    "tenureMonths": 12
  }
  `
- **Response**:
  Returns calculated monthly installment, interest discount waived by 1Fi, processing fee, and required Mutual Fund collateral value (1.5x loan ratio).
