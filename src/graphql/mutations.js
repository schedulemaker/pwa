/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        instructors
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
