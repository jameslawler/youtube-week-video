import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-04-06",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-06.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/06.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
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
            data: "3 + 3 = ?",
            answer: "6",
            answerAudio: await getAudio("audio/voices/answers/six.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-07.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/07.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-02.mp3",
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
            data: "images/animals/elephant.jpg",
            answer: "Elephant",
            answerAudio: await getAudio("audio/voices/answers/elephant.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-08.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/08.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-03.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-the-answer.mp3",
            ),
            type: "text",
            data: "3 + 2 = ?",
            answer: "5",
            answerAudio: await getAudio("audio/voices/answers/five.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-09.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/09.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Name the Shape",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-this-shape.mp3",
            ),
            type: "image",
            data: "images/shapes/circle.png",
            answer: "Circle",
            answerAudio: await getAudio("audio/voices/answers/circle.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-10.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/10.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-02.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Subtraction",
            headerAudio: await getAudio(
              "audio/voices/questions/take-away-the-numbers.mp3",
            ),
            type: "text",
            data: "4 - 1 = ?",
            answer: "3",
            answerAudio: await getAudio("audio/voices/answers/three.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-11.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/11.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-03.mp3",
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
            data: "images/animals/bee.jpg",
            answer: "Bee",
            answerAudio: await getAudio("audio/voices/answers/bee.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-12.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/12.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
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
            data: "1 + 5 = ?",
            answer: "6",
            answerAudio: await getAudio("audio/voices/answers/six.mp3"),
          },
        ],
      },
    ],
  };
};
