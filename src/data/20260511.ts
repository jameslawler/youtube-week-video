import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-05-11",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-11.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/11.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Who is this",
            headerAudio: await getAudio(
              "audio/voices/questions/can-you-add-the-numbers.mp3",
            ),
            type: "text",
            data: "3 + 4 = ?",
            answer: "7",
            answerAudio: await getAudio("audio/voices/answers/seven.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-12.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/12.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Flags",
            headerAudio: await getAudio(
              "audio/voices/questions/which-country-is-this.mp3",
            ),
            type: "image",
            data: "images/flags/brazil.jpg",
            answer: "Brazil",
            answerAudio: await getAudio("audio/voices/answers/brazil.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-13.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/13.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Subtraction",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-the-answer.mp3",
            ),
            type: "text",
            data: "6 - 2 = ?",
            answer: "4",
            answerAudio: await getAudio("audio/voices/answers/four.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-14.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/14.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Emoji Quiz",
            headerAudio: await getAudio(
              "audio/voices/questions/who-is-this.mp3",
            ),
            type: "text",
            data: "🔵 + 🐶 = ?",
            answer: "Bluey",
            answerAudio: await getAudio("audio/voices/answers/bluey.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-15.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/15.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Reading",
            headerAudio: await getAudio(
              "audio/voices/questions/read-this-word.mp3",
            ),
            type: "text",
            data: "Computer",
            answer: "Com-pu-ter",
            answerAudio: await getAudio("audio/voices/answers/computer.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-16.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/16.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-the-answer.mp3",
            ),
            type: "text",
            data: "1 + 8 = ?",
            answer: "9",
            answerAudio: await getAudio("audio/voices/answers/nine.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-17.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/17.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Animal",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-this-animal.mp3",
            ),
            type: "image",
            data: "images/animals/worm.webp",
            answer: "Worm",
            answerAudio: await getAudio("audio/voices/answers/worm.mp3"),
          },
        ],
      },
    ],
  };
};
