/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedules = /* GraphQL */ `
  mutation CreateSchedules($event: SchedulerInput) {
    createSchedules(event: $event) {
      isOpen
      campus
      meetingTimes {
        startTime
        endTime
        building
        room
        instructors
        weeks
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
      }
      courseName
      crn
      title
    }
  }
`;
