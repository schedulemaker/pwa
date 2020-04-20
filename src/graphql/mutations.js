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
export const createUserSchedule = /* GraphQL */ `
  mutation CreateUserSchedule(
    $input: CreateUserScheduleInput!
    $condition: ModelUserScheduleConditionInput
  ) {
    createUserSchedule(input: $input, condition: $condition) {
      sections {
        isOpen
        campus
        courseName
        crn
        title
      }
      commute
      totalDistance
      username
      scheduleId
      _version
      _deleted
      _lastChangedAt
      version
    }
  }
`;
export const updateUserSchedule = /* GraphQL */ `
  mutation UpdateUserSchedule(
    $input: UpdateUserScheduleInput!
    $condition: ModelUserScheduleConditionInput
  ) {
    updateUserSchedule(input: $input, condition: $condition) {
      sections {
        isOpen
        campus
        courseName
        crn
        title
      }
      commute
      totalDistance
      username
      scheduleId
      _version
      _deleted
      _lastChangedAt
      version
    }
  }
`;
export const deleteUserSchedule = /* GraphQL */ `
  mutation DeleteUserSchedule(
    $input: DeleteUserScheduleInput!
    $condition: ModelUserScheduleConditionInput
  ) {
    deleteUserSchedule(input: $input, condition: $condition) {
      sections {
        isOpen
        campus
        courseName
        crn
        title
      }
      commute
      totalDistance
      username
      scheduleId
      _version
      _deleted
      _lastChangedAt
      version
    }
  }
`;
