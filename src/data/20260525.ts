import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-05-25",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-25.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/25.mp3",
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
              "audio/voices/questions/subtract-the-numbers.mp3",
            ),
            type: "text",
            data: "7 - 2 = ?",
            answer: "5",
            answerAudio: await getAudio("audio/voices/answers/five.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-26.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/26.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-02.mp3",
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
            data: "images/animals/gorilla.jpg",
            answer: "Gorilla",
            answerAudio: await getAudio("audio/voices/answers/gorilla.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-27.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/27.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
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
            data: "8 + 3 = ?",
            answer: "11",
            answerAudio: await getAudio("audio/voices/answers/eleven.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-28.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/28.mp3",
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
            data: "👨 + 🫘 = ?",
            answer: "Mr Bean",
            answerAudio: await getAudio("audio/voices/answers/mr-bean-2.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-29.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/29.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Flags",
            headerAudio: await getAudio(
              "audio/voices/questions/which-country-is-this.mp3",
            ),
            type: "image",
            data: "images/flags/germany.jpg",
            answer: "Germany",
            answerAudio: await getAudio("audio/voices/answers/germany.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Animal",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-this-animal.mp3",
            ),
            type: "image",
            data: "images/animals/ladybug.jpg",
            answer: "Ladybug",
            answerAudio: await getAudio("audio/voices/answers/ladybug.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-31.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/31.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
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
            data: "4 + 4 = ?",
            answer: "8",
            answerAudio: await getAudio("audio/voices/answers/eight.mp3"),
          },
        ],
      },
    ],
  };
};
