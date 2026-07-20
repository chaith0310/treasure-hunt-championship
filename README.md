# Treasure Hunt Championship

Premium corporate treasure hunt event platform built with React, Vite, Tailwind CSS, React Router, and LocalStorage persistence.

## Run locally

```bash
npm install
npm run dev
```

## Configuration-first content model

All event content is controlled from `src/config/gameConfig.js`.

Update that file to change level titles, instructions, challenge types, accepted passwords, city decoder image puzzle placeholders, MCQ questions, options, answer keys, completion messages, winner messages, and seed leaderboard entries.

React components read content dynamically from the config file. No level content is hardcoded into components.

## Password behavior

Passwords are validated through `src/utils/passwordValidator.js`.

- Case-insensitive
- Ignores leading and trailing spaces
- Supports multiple accepted passwords per level

## Level 2 image puzzle behavior

Each puzzle supports 1 to 4 images through the `images` array in `gameConfig.js`. Images are horizontal on desktop and stack responsively on mobile.

## Level 5 MCQ behavior

Question type is controlled by configuration:

- `single` renders radio buttons
- `multiple` renders checkboxes

The application does not calculate the final password from answers. Participants manually derive the final password and enter it at the bottom.
