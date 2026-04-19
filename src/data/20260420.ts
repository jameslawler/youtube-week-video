import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-04-20",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-20.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/20.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
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
            data: "images/flags/united-kingdom.jpg",
            answer: "United Kingdom",
            answerAudio: await getAudio(
              "audio/voices/answers/united-kingdom.mp3",
            ),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-21.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/21.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-02.mp3",
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
            data: "6 + 1 = ?",
            answer: "7",
            answerAudio: await getAudio("audio/voices/answers/seven.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-22.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/22.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-03.mp3",
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
            data: "4 - 1 = ?",
            answer: "3",
            answerAudio: await getAudio("audio/voices/answers/three.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-23.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/23.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Name the Animal",
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
        dayIntroAudio: await getAudio("audio/voices/day/april-24.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/24.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-02.mp3",
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
            data: "images/characters/pedro-pony.png",
            answer: "Pedro Pony",
            answerAudio: await getAudio("audio/voices/answers/pedro-pony.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-25.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/25.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-03.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Emoji Animal",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-this-animal.mp3",
            ),
            type: "text",
            data: "S + 💅",
            answer: "Snail",
            answerAudio: await getAudio("audio/voices/answers/snail.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-26.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/26.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Calendar",
            headerAudio: await getAudio(
              "audio/voices/questions/how-many-days-in-april.mp3",
            ),
            type: "text",
            data: "How many days in April?",
            answer: "30",
            answerAudio: await getAudio(
              "audio/voices/answers/30-days-in-april.mp3",
            ),
          },
        ],
      },
    ],
  };
};
