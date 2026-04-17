import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-04-13",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-13.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/13.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Country",
            headerAudio: await getAudio(
              "audio/voices/questions/which-country-is-this.mp3",
            ),
            type: "image",
            data: "images/flags/portugal.png",
            answer: "Portugal",
            answerAudio: await getAudio("audio/voices/answers/portugal.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-14.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/14.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio(
              "audio/voices/questions/can-you-add-the-numbers.mp3",
            ),
            type: "text",
            data: "2 + 5 = ?",
            answer: "Seven",
            answerAudio: await getAudio("audio/voices/answers/seven.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-15.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/15.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-03.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
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
        dayIntroAudio: await getAudio("audio/voices/day/april-16.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/16.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Name the Animal",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-this-animal.mp3",
            ),
            type: "image",
            data: "images/animals/gorilla.jpg",
            answer: "Gorilla",
            answerAudio: await getAudio("audio/voices/answers/gorilla.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-17.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/17.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Seasons",
            headerAudio: await getAudio(
              "audio/voices/questions/how-many-seasons.mp3",
            ),
            type: "text",
            data: "🌸 ☀️ 🍂 ⛄",
            answer: "4",
            answerAudio: await getAudio(
              "audio/voices/answers/four-seasons.mp3",
            ),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-18.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/18.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-03.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Who is bigger?",
            headerAudio: await getAudio(
              "audio/voices/questions/who-is-bigger.mp3",
            ),
            type: "text",
            data: "🍌 vs 🍍",
            answer: "Pineapple",
            answerAudio: await getAudio("audio/voices/answers/pineapple.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-19.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/19.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Multiply",
            headerAudio: await getAudio(
              "audio/voices/questions/multiple-these-numbers.mp3",
            ),
            type: "text",
            data: "2 x 2 = ?",
            answer: "4",
            answerAudio: await getAudio("audio/voices/answers/four.mp3"),
          },
        ],
      },
    ],
  };
};
