/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const saveUserSchedule = /* GraphQL */ `
  mutation SaveUserSchedule($username: String!, $schedule: UserScheduleInput!) {
    saveUserSchedule(username: $username, schedule: $schedule)
  }
`;
export const createSchedules = /* GraphQL */ `
  mutation CreateSchedules(
    $courses: [String]!
    $campuses: [String]!
    $school: String!
    $term: Int!
  ) {
    createSchedules(
      courses: $courses
      campuses: $campuses
      school: $school
      term: $term
    ) {
      isOpen
      campus
      meetingTimes {
        startTime
        endTime
        building
        room
        instructors {
          ID
          Name
        }
        weeks
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      courseName
      crn
      title
    }
  }
`;
