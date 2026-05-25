import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-05-18",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-18.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/18.mp3",
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
            data: "12 - 2 = ?",
            answer: "10",
            answerAudio: await getAudio("audio/voices/answers/ten.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-19.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/19.mp3",
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
            data: "images/animals/butterfly.jpg",
            answer: "Butterfly",
            answerAudio: await getAudio("audio/voices/answers/butterfly.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-20.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/20.mp3",
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
            data: "3 + 3 = ?",
            answer: "6",
            answerAudio: await getAudio("audio/voices/answers/six.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-21.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/21.mp3",
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
              "audio/voices/questions/what-movie-is-this.mp3",
            ),
            type: "text",
            data: "🦁 + 👑 = ?",
            answer: "The Lion King",
            answerAudio: await getAudio("audio/voices/answers/lion-king.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-22.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/22.mp3",
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
            data: "images/flags/australia.jpg",
            answer: "Australia",
            answerAudio: await getAudio("audio/voices/answers/australia.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-23.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/23.mp3",
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
            data: "images/animals/monkey.jpg",
            answer: "Monkey",
            answerAudio: await getAudio("audio/voices/answers/monkey.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-24.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/24.mp3",
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
            data: "10 + 4 = ?",
            answer: "14",
            answerAudio: await getAudio("audio/voices/answers/fourteen.mp3"),
          },
        ],
      },
    ],
  };
};
