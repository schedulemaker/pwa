import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class BannerMetadata {
  readonly code: string;
  readonly description: string;
  constructor(init: ModelInit<BannerMetadata>);
}

export declare class Course {
  readonly courseName: string;
  readonly title: string;
  constructor(init: ModelInit<Course>);
}

export declare class Section {
  readonly isOpen?: boolean;
  readonly campus?: string;
  readonly meetingTimes?: MeetingTime[];
  readonly courseName: string;
  readonly crn: number;
  readonly title?: string;
  constructor(init: ModelInit<Section>);
}

export declare class MeetingTime {
  readonly startTime?: number;
  readonly endTime?: number;
  readonly building?: string;
  readonly room?: string;
  readonly instructors?: string[];
  readonly weeks?: number[];
  readonly monday?: boolean;
  readonly tuesday?: boolean;
  readonly wednesday?: boolean;
  readonly thursday?: boolean;
  readonly friday?: boolean;
  readonly saturday?: boolean;
  readonly sunday?: boolean;
  constructor(init: ModelInit<MeetingTime>);
}

export declare class UserSchedule {
  readonly id: string;
  readonly sections?: Section[];
  readonly commute?: boolean;
  readonly totalDistance?: number;
  readonly username?: string;
  readonly scheduleId?: string;
  constructor(init: ModelInit<UserSchedule>);
  static copyOf(source: UserSchedule, mutator: (draft: MutableModel<UserSchedule>) => MutableModel<UserSchedule> | void): UserSchedule;
}