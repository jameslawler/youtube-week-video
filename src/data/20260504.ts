import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-05-04",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-04.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/04.mp3",
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
              "audio/voices/questions/who-is-this.mp3",
            ),
            type: "image",
            data: "images/characters/yoda.png",
            answer: "Yoda",
            answerAudio: await getAudio("audio/voices/answers/yoda.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-05.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/05.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio(
              "audio/voices/questions/can-you-add-the-numbers.mp3",
            ),
            type: "text",
            data: "4 + 5 = ?",
            answer: "9",
            answerAudio: await getAudio("audio/voices/answers/nine.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-06.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/06.mp3",
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
            data: "4 - 2 = ?",
            answer: "2",
            answerAudio: await getAudio("audio/voices/answers/two.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-07.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/07.mp3",
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
            data: "🌶️ + 🐷 = ?",
            answer: "Peppa Pig",
            answerAudio: await getAudio("audio/voices/answers/peppa-pig.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-08.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/08.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Country",
            headerAudio: await getAudio(
              "audio/voices/questions/which-country-is-this.mp3",
            ),
            type: "image",
            data: "images/shapes/australia.png",
            answer: "Australia",
            answerAudio: await getAudio("audio/voices/answers/australia.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-09.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/09.mp3",
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
            data: "5 + 5 = ?",
            answer: "10",
            answerAudio: await getAudio("audio/voices/answers/ten.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-10.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/10.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Days in May",
            headerAudio: await getAudio(
              "audio/voices/questions/how-many-days-in-may.mp3",
            ),
            type: "text",
            data: "Days in May?",
            answer: "31",
            answerAudio: await getAudio(
              "audio/voices/answers/31-days-in-may.mp3",
            ),
          },
        ],
      },
    ],
  };
};
