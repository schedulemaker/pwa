/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
