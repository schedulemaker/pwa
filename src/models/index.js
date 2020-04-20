// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserSchedule, BannerMetadata, Course, Section, MeetingTime } = initSchema(schema);

export {
  UserSchedule,
  BannerMetadata,
  Course,
  Section,
  MeetingTime
};