# Home Dashboard Component (`src/components/home/`)

This directory contains the primary Home view component for the 1Fi application, engineered to replicate the interactions, micro-animations, and visual hierarchy demonstrated in the official 1Fi mobile application walkthrough recordings.

---

## Component Details

### `HomeView.tsx`

The `HomeView` component serves as the default landing view of the application and includes the following sections:

1. **Shop Today, Pay Later Hero Banner**:
   - Signature deep gradient (`#120E52` → `#241380` → `#5C24EB`) with sparkling stars and a 3D angled `0% Interest` visual card.
   - 1-tap "Check eligibility" call-to-action redirecting directly to the credit line unlocking flow.

2. **Curated Offers Carousel**:
   - Auto-sliding promotional carousel (3.5s interval) showcasing 6 curated partner deals (Adventure Ride, Apple Flagship, Euro-phoric Escape, Sony ANC, Tanishq 24K Gold, Dyson Airwrap).
   - Animated pill pagination indicators reflecting the currently active slide.

3. **Shop Using 1Fi at Top Brands (Continuous Marquee)**:
   - Seamless infinite auto-scrolling rail moving leftward, featuring 18+ official partner brand vector SVGs (Reliance Digital, Croma, Vijay Sales, MakeMyTrip, Air India, etc.) with bilateral fade gradient masks.

4. **Why Pay With 1Fi (Alternating Pendulum Sway)**:
   - 2-layer horizontal feature cards showcasing 0% interest, no taxes/exit loads, fastest approvals, and zero hidden charges.
   - Micro-interaction: Layer 1 sways left, slows down, pauses briefly, and sways right; Layer 2 executes a complementary opposite sway motion.

5. **How 1Fi Works (1-2-3 Step Guide)**:
   - Solid purple gradient circles (`#6C38FF` to `#501EE6`) with white icons, dark numeric badges (1, 2, 3), and horizontal dashed connector lines.
   - Steps: *1. Connect Your Portfolio* → *2. Unlock Your Limit* → *3. Shop & Pay Later*.

6. **Refer & Earn Banner**:
   - High-contrast promo banner with gold 3D typography (`REFER AND EARN`), `INVITE` pill, and shortcut to the referral rewards modal.

7. **Frequently Asked Questions**:
   - Interactive accordion answering key questions regarding RBI regulations, NBFC lending partners, and mutual fund lien mechanics, accompanied by a "View all FAQs" card button.
