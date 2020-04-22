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
      sections {
        isOpen
        campus
        meetingTimes {
          startTime
          endTime
          building
          room
          weeks
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          instructors {
            ID
            Name
          }
        }
        courseName
        crn
        title
      }
      commute
      totalDistance
    }
  }
`;
