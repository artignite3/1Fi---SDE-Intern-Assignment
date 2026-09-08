# EMI API Module (`src/app/api/emi/`)

This directory houses the financial engine and REST API route handlers responsible for 0% No-Cost EMI calculations, tenure amortization schedules, and Mutual Fund lien collateral assessment.

---

## Architecture Overview

All endpoints in this group adhere to standard RBI NBFC lending guidelines for Mutual Fund lien pledging:
- **Interest Rate**: 0% APR (subsidized via merchant agreements).
- **Processing Fees**: ₹0.
- **Collateral Ratio**: 1.3x - 1.5x of the loan principal value pledged via SEBI-registered RTAs (CAMS / KFintech).

---

## Subdirectories & Endpoints

- [`calculate/`](./calculate): `POST /api/emi/calculate` — Real-time EMI calculation and lien determination.
