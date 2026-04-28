import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-04-27",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-27.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/27.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/04-april-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Flowers",
            headerAudio: await getAudio(
              "audio/voices/questions/which-flower-is-this.mp3",
            ),
            type: "image",
            data: "images/plants/daisy.webp",
            answer: "Daisy",
            answerAudio: await getAudio("audio/voices/answers/daisy.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-28.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/28.mp3",
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
            data: "10 + 5 = ?",
            answer: "15",
            answerAudio: await getAudio("audio/voices/answers/fifteen.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-29.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/29.mp3",
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
            data: "6 - 3 = ?",
            answer: "3",
            answerAudio: await getAudio("audio/voices/answers/three.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/april-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
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
              "audio/voices/questions/can-you-add-the-numbers.mp3",
            ),
            type: "text",
            data: "2 + 6 = ?",
            answer: "8",
            answerAudio: await getAudio("audio/voices/answers/eight.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-01.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/01.mp3",
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
            data: "images/characters/mr-bean.png",
            answer: "Mr Bean",
            answerAudio: await getAudio("audio/voices/answers/mr-bean.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-02.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/02.mp3",
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
            data: "1 + 5 = ?",
            answer: "6",
            answerAudio: await getAudio("audio/voices/answers/six.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/may-03.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/03.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/05-may-01.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-02.mp3",
        ),
        questions: [
          {
            header: "Shapes",
            headerAudio: await getAudio(
              "audio/voices/questions/what-is-this-shape.mp3",
            ),
            type: "image",
            data: "images/shapes/triangle.png",
            answer: "Triangle",
            answerAudio: await getAudio("audio/voices/answers/triangle.mp3"),
          },
        ],
      },
    ],
  };
};
