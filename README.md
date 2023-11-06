# Marvel-Character-Quiz
---
This project is a web application in which a user can take a short personality quiz that generates a Marvel character they most resemble from 5 options, including Black Widow, Deadpool, Captain America, Groot, and Spiderman. We used get requests from both a Marvel API and a cocktail database API in order to show the matching character and a drink they'd theoretically enjoy as well. 

User Story:

## User Story

```md
 As a Marvel fan, I want to take a personality quiz, so that I can be matched with a Marvel character I resemble the most.
```

## Webpage Overview
- Header: Displays the app title, a brief description, and the current date.
- Main Content: Dynamically generated timeblocks for the hours of 9AM-5PM. Each timeblock consists of an hour label, a textarea for inputting tasks/events, and a save button.
- Colors: Timeblocks are color-coded based on the current time - past hours are marked in one color, the present hour in another, and future hours in yet another.

## App Structure and Features
- Dynamic Timeblocks: Timeblocks are created dynamically for standard business hours. They are appended to the main container using JavaScript.
- Local Storage: Tasks/events entered into the timeblocks are saved into the browser's local storage. They remain visible even after refreshing the page.
- Color Coding: Each timeblock is color-coded to indicate whether the time it represents is in the past, present, or future.
- Date Display: The current date is displayed at the top of the page, making it easy for users to see the day at a glance.
- External Libraries: The app uses Bootstrap for styling, Font Awesome for icons, Google Fonts for typography, jQuery for JavaScript simplification, and dayjs for date and time management.

## Technologies Used


## App Screenshot
<img width="1368" alt="image" src="https://github.com/Donnie1129/marvel-character-personality-quiz/assets/144064556/b68e37a2-7ae2-4559-91bf-a11848286229">

## App Url Link
https://donnie1129.github.io/marvel-character-personality-quiz/
