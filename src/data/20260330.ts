import { getAudio } from "./audio";

export const getData = async () => {
  return {
    titleWord1: "THIS",
    titleWord2: "WEEK",
    startDate: "2026-03-30",
    daysData: [
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio("audio/voices/add-the-numbers.mp3"),
            type: "text",
            data: "5 + 3 = ?",
            answer: "8",
            answerAudio: await getAudio("audio/voices/eight.mp3"),
          },
          {
            header: "Addition",
            headerAudio: await getAudio("audio/voices/add-the-numbers.mp3"),
            type: "text",
            data: "2 + 4 = ?",
            answer: "6",
            answerAudio: await getAudio("audio/voices/six.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Name the Animal",
            headerAudio: await getAudio("audio/voices/name-the-animal.mp3"),
            type: "image",
            data: "images/animals/giraffe.jpg",
            answer: "Giraffe",
            answerAudio: await getAudio("audio/voices/giraffe.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio("audio/voices/add-the-numbers.mp3"),
            type: "text",
            data: "5 + 3 = ?",
            answer: "8",
            answerAudio: await getAudio("audio/voices/eight.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Name the Animal",
            headerAudio: await getAudio("audio/voices/name-the-animal.mp3"),
            type: "image",
            data: "images/animals/giraffe.jpg",
            answer: "Giraffe",
            answerAudio: await getAudio("audio/voices/giraffe.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio("audio/voices/add-the-numbers.mp3"),
            type: "text",
            data: "5 + 3 = ?",
            answer: "8",
            answerAudio: await getAudio("audio/voices/eight.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Name the Animal",
            headerAudio: await getAudio("audio/voices/name-the-animal.mp3"),
            type: "image",
            data: "images/animals/giraffe.jpg",
            answer: "Giraffe",
            answerAudio: await getAudio("audio/voices/giraffe.mp3"),
          },
        ],
      },
      {
        dayIntroAudio: await getAudio("audio/voices/day/intro-march-30.mp3"),
        dayWrittenDayAudio: await getAudio(
          "audio/voices/day-written/day/30.mp3",
        ),
        dayWrittenMonthAudio: await getAudio(
          "audio/voices/day-written/month/03-march.mp3",
        ),
        dayWrittenYearAudio: await getAudio(
          "audio/voices/day-written/year/2026-01.mp3",
        ),
        questions: [
          {
            header: "Addition",
            headerAudio: await getAudio("audio/voices/add-the-numbers.mp3"),
            type: "text",
            data: "5 + 3 = ?",
            answer: "8",
            answerAudio: await getAudio("audio/voices/eight.mp3"),
          },
        ],
      },
    ],
  };
};
