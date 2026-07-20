export const gameConfig = {
  eventName: "Treasure Hunt Championship",
  totalLevels: 7,
  storageKeys: {
    team: "thc_team_name",
    progress: "thc_progress",
    leaderboard: "thc_leaderboard"
  },
  hero: {
    eyebrow: "Corporate Innovation Challenge",
    title: "PROJECT TREASURE HUNT CHAMPIONSHIP",
    subtitle: "Think Fast. Collaborate Smart. Win Together.",
    highlights: ["7 Levels", "Multiple Challenges", "Physical + Digital Treasure Hunt"]
  },
  completionMessage:
    "Your teamwork, communication, creativity, and persistence have brought you to the finish line.",
  winnerMessage: "You completed the championship. Report to the event desk for final validation.",
  leaderboardSeed: [
    { teamName: "Cloud Mavericks", currentLevel: 7, completedLevels: 7 },
    { teamName: "Purple Falcons", currentLevel: 6, completedLevels: 5 },
    { teamName: "Innovation Crew", currentLevel: 5, completedLevels: 4 },
    { teamName: "Blue Sparks", currentLevel: 4, completedLevels: 3 }
  ],
  levels: [
    {
      id: 1,
      title: "First Signal",
      type: "password",
      instructions:
        "Find the first physical clue, collaborate with your team, and enter the mission password to unlock the next level.",
      acceptedPasswords: ["book", "shoe","king","nine","salt","fist","ring","wood","boat","ship","bulb","cake"]
    },
    {
      id: 2,
      title: "City Decoder",
      type: "imagePuzzle",
      instructions:
        "Decode all five city puzzles on this page. Write each city name, use your team logic to derive the final password, and enter it at the bottom.",
      acceptedPasswords: ["MTFBP"],
      puzzles: [
        {
          id: "city-1",
          label: "Puzzle 1",
          images: [
            { alt: "Image clue 1", placeholder: "Clue Image 1" },
            { alt: "Image clue 2", placeholder: "Clue Image 2" },
            { alt: "Image clue 3", placeholder: "Clue Image 3" }
          ]
        },
        {
          id: "city-2",
          label: "Puzzle 2",
          images: [
            { alt: "Image clue 1", placeholder: "Clue Image 1" },
            { alt: "Image clue 2", placeholder: "Clue Image 2" }
          ]
        },
        {
          id: "city-3",
          label: "Puzzle 3",
          images: [
            { alt: "Image clue 1", placeholder: "Clue Image 1" },
            { alt: "Image clue 2", placeholder: "Clue Image 2" },
            { alt: "Image clue 3", placeholder: "Clue Image 3" },
            { alt: "Image clue 4", placeholder: "Clue Image 4" }
          ]
        },
        {
          id: "city-4",
          label: "Puzzle 4",
          images: [{ alt: "Image clue 1", placeholder: "Clue Image 1" }]
        },
        {
          id: "city-5",
          label: "Puzzle 5",
          images: [
            { alt: "Image clue 1", placeholder: "Clue Image 1" },
            { alt: "Image clue 2", placeholder: "Clue Image 2" },
            { alt: "Image clue 3", placeholder: "Clue Image 3" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Strategy Gate",
      type: "password",
      instructions:
        "Complete the mission task with your team. Enter the password confirmed by the organizer or physical clue.",
      acceptedPasswords: ["TEN"]
    },
    {
      id: 4,
      title: "Office Puzzle",
      type: "password",
      instructions:
        "Solve the office puzzle. This level supports multiple valid password variants so organizers can accept alternate correct answers.",
      acceptedPasswords: ["LTTO", "FTMGM", "LCTH","TTTO","LFTO","FTMITL","PIPGM","DFCTP","OSAM","CSSTP","LCTEM"]
    },
    {
      id: 5,
      title: "Project Knowledge Sprint",
      type: "mcq",
      instructions:
        "Answer all questions on one page. The app records selections for your team experience, but does not calculate the final password. Derive it manually and enter it below.",
      acceptedPasswords: ["BCCC"],
      questions: [
        {
          id: "q1",
          type: "single",
          question: "Which capability best represents innovation delivery?",
          options: ["Speed", "Clarity", "Collaboration", "All of the above"],
          answerKey: ["All of the above"]
        },
        {
          id: "q2",
          type: "multiple",
          question: "Select all traits of a high-performing delivery team.",
          options: ["Ownership", "Communication", "Siloed work", "Continuous learning"],
          answerKey: ["Ownership", "Communication", "Continuous learning"]
        },
        {
          id: "q3",
          type: "single",
          question: "What should teams optimize during a time-bound challenge?",
          options: ["Individual speed only", "Shared clarity", "Random guessing", "Waiting for instructions"],
          answerKey: ["Shared clarity"]
        }
      ]
    },
    {
      id: 6,
      title: "QR Quest",
      type: "password",
      instructions:
        "Scan the QR clue, complete the field mission, and enter the accepted answer to move to the final challenge.",
      acceptedPasswords: ["QRQUEST", "SCAN", "QUEST"]
    },
    {
      id: 7,
      title: "Judge Challenge",
      type: "password",
      instructions:
        "Present your final evidence to the judge. Enter the final approval password after judge validation.",
      acceptedPasswords: ["CHAMPION", "FINISH", "TREASURE"]
    }
  ]
};
