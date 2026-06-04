import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-06-01",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-01.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/01.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-01.mp3",
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
            data: "4 - 1 = ?",
            answer: "3",
            answerAudio: await getAudio("audio/voices/answers/three.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-02.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/02.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-02.mp3",
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
            data: "images/animals/ant.jpg",
            answer: "Ant",
            answerAudio: await getAudio("audio/voices/answers/ant.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-03.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/03.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-01.mp3",
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
            data: "10 + 10 = ?",
            answer: "20",
            answerAudio: await getAudio("audio/voices/answers/twenty.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-04.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/04.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Emoji Quiz",
            headerAudio: await getAudio(
              "audio/voices/questions/which-childrens-story-is-this.mp3",
            ),
            type: "text",
            data: "🐷🐷🐷 = ?",
            answer: "Three Little Pigs",
            answerAudio: await getAudio(
              "audio/voices/answers/three-little-pigs.mp3",
            ),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-05.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/05.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-01.mp3",
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
            data: "images/flags/usa.jpg",
            answer: "United States of America",
            answerAudio: await getAudio("audio/voices/answers/usa.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-06.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/06.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-02.mp3",
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
            data: "images/animals/elephant.jpg",
            answer: "Elephant",
            answerAudio: await getAudio("audio/voices/answers/elephant.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/june-07.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/07.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/06-june-01.mp3",
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
            data: "2 + 2 + 2 = ?",
            answer: "6",
            answerAudio: await getAudio("audio/voices/answers/six.mp3"),
          },
        ],
      },
    ],
  };
};
