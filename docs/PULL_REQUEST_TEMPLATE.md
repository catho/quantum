## Description
Put the description of the task here.

## Setup
to view the components behavior, run `yarn storybook`

## Review guide
- [ ] Coverage (coverage status should not regress)\
      - `yarn test:coverage`
- [ ] Unit tests (yarn test:components)
- [ ] Regression \
      - first start the storybook for regression tests(and keep it open): ` yarn test:regression:storybook`; \
      - then run the regression tests: `yarn test:regression`
- [ ] Code review
- [ ] TypeScript updated

### A11y review
- [ ] A11y checks
  - [ ] accessible via keyboard?
  - [ ] Identifiable through assistive technology (screen-reader chrome extension)?
  - [ ] Semantically correct html elements (or if necessary identified by WAI-ARIA)?
  - [ ] Is there a deficiency in color contrast?

### Browsers review
- [ ] Layout review
  - [ ] Edge
  - [ ] Firefox
  - [ ] Chrome
  - [ ] Safari
  - [ ] Mobile
- [ ] Ux review validation