# NutriWise — GitHub Pages-ready AI Nutritionist Research Demo

A responsive, **static** Indian meal-planning research prototype. No Flask, Python, Streamlit, npm installation, API key, or database is needed for the live website.

## Features
- BMI, BMR (Mifflin–St Jeor), TDEE, calorie and illustrative protein targets
- Vegetarian, egg-inclusive, non-vegetarian preferences
- Daily budget and one ingredient exclusion
- Seven-day meal planning with estimated calories, protein and costs
- Explainable deterministic scoring; explicit warnings when constraints are not met
- Downloadable CSV and automated Node.js tests

## Deploy on GitHub Pages
1. Create a **new public GitHub repository** named `nutriwise` (recommended; preserves your original Flask project).
2. Upload the **contents** of this ZIP directly into the repository root, not the enclosing folder. `index.html` must be visible in the root.
3. Go to **Settings → Pages → Build and deployment**.
4. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, then **Save**.
5. After deployment finishes, visit `https://YOUR_USERNAME.github.io/nutriwise/` (replace username and repo name exactly).
6. If 404, check **Actions** for failed deployment, confirm `index.html` is at root, and wait for the initial build.

To deploy into existing `Ai_nutri` repository instead, upload these files into its root (beware filename conflicts) and visit `https://ansvikk.github.io/Ai_nutri/`. A **new repository is safer** because the original Flask app and this static app have different architectures.

## Run locally
Open `index.html` in a browser. To run tests, install Node.js 20+ and run `npm test`.

## Architecture
- `index.html` UI
- `styles.css` responsive design
- `data.js` illustrative food dataset
- `planner.js` deterministic scoring and seven-day plan generation
- `app.js` form, rendering and CSV export
- `tests/planner.test.js` baseline automated tests

### Scoring baseline
For each combination of one breakfast, lunch, snack and dinner, after diet/exclusion filtering:

`score = 3 * |calories-target| / target + 1.3 * |protein-proteinTarget| / proteinTarget + 12 * max(0, cost-budget) / budget + 0.035 * repeatCount`

Select the combination with the lowest score, independently for each day, with a small penalty for repeated foods. A budget violation is penalized, **not prohibited**: when the budget is impossible, the UI explicitly reports it. The algorithm does not optimize vitamins/minerals, sodium, fiber, medical needs or clinical safety.

## Research integrity / limitations
This is **not a trained ML model**. It is a transparent constraint-aware baseline suitable for future comparison against a genuinely implemented KNN/Decision Tree model on a consistent task. No accuracy, superiority, clinical validation or publication claim is made. Dataset values and prices are **synthetic illustrative per-serving estimates**, not validated against IFCT or live vendors. Ingredient tags are incomplete and **must not be used as an allergy safety guarantee**. The BMR sex coefficients are limited to the original binary equation; the tool does not capture the needs of all users. It is intended for healthy adults aged 18–80, not pregnant users, children, users with eating disorders, or people with medical dietary requirements. The 1.0 g/kg protein target and ±250 kcal goal adjustment are **demonstration assumptions**, not individualized clinical prescriptions.

Before research publication: source a validated food dataset and price evidence, verify portion sizes and units, define a held-out evaluation protocol, compare against baselines, document limitations, and obtain relevant expert review for any health efficacy claims. Do not treat these tests as scientific evaluation.

## License
MIT. See `LICENSE`.
