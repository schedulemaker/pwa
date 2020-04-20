/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserSchedules = /* GraphQL */ `
  query GetUserSchedules($username: String!) {
    getUserSchedules(username: $username) {
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
export const syncUserSchedules = /* GraphQL */ `
  query SyncUserSchedules(
    $filter: ModelUserScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        commute
        totalDistance
        username
        scheduleId
        _version
        _deleted
        _lastChangedAt
        version
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserSchedule = /* GraphQL */ `
  query GetUserSchedule($id: ID!) {
    getUserSchedule(id: $id) {
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
export const listUserSchedules = /* GraphQL */ `
  query ListUserSchedules(
    $filter: ModelUserScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        commute
        totalDistance
        username
        scheduleId
        _version
        _deleted
        _lastChangedAt
        version
      }
      nextToken
      startedAt
    }
  }
`;
