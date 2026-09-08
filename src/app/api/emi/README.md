# EMI API Module (src/app/api/emi/)

This directory houses route handlers responsible for financial calculations, interest waiver rules, and Mutual Fund lien pledging algorithms for 0% No-Cost EMI transactions.

---

## Sub-Routes

- [calculate/](./calculate/README.md): Endpoint for dynamic calculation of monthly installments, interest discounts, tenure schedules, and required mutual fund collateral backing.

---

## Financial Model

1. **Zero-Cost EMI**:
   Interest is fully subsidized by participating merchant partners. The customer pays only the net product cost spread evenly over the tenure.

2. **Mutual Fund Lien Collateral**:
   Required collateral is calculated at 1.5x the principal value against approved SEBI-registered equity and hybrid mutual fund units.
