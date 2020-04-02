/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBannerMetadata = /* GraphQL */ `
  query GetBannerMetadata($event: BannerProxyInput) {
    getBannerMetadata(event: $event) {
      code
      description
    }
  }
`;
export const getCourseDescription = /* GraphQL */ `
  query GetCourseDescription($event: BannerProxyInput) {
    getCourseDescription(event: $event)
  }
`;
export const getCourses = /* GraphQL */ `
  query GetCourses {
    getCourses {
      courseName
      title
    }
  }
`;
