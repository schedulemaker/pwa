/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserSchedules = /* GraphQL */ `
  query GetUserSchedules($username: String!) {
    getUserSchedules(username: $username) {
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
        }
        courseName
        crn
        title
      }
      commute
      totalDistance
      username
      scheduleId
      times
      density
      days {
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      instructors
    }
  }
`;
export const getBannerMetadata = /* GraphQL */ `
  query GetBannerMetadata(
    $school: String!
    $term: Int!
    $method: String!
    $params: BannerArgs
  ) {
    getBannerMetadata(
      school: $school
      term: $term
      method: $method
      params: $params
    ) {
      code
      description
    }
  }
`;
export const getCourseList = /* GraphQL */ `
  query GetCourseList {
    getCourseList {
      courseName
      title
    }
  }
`;
