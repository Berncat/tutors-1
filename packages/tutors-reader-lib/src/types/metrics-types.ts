import type { Topic } from "../models/topic";
import type { User } from "./auth-types";
import type { IconType } from "./icon-types";
import type { Lo } from "./lo-types";

export interface Metric {
  id: string;
  title: string;
  count: number;
  last: string;
  duration: number;
  metrics: Metric[];
}

export interface DayMeasure {
  date: string;
  dateObj: number;
  metric: number;
}

export interface UserMetric extends User {
  title: string;
  count: number;
  last: string;
  duration: number;
  metrics: Metric[];
  labActivity: Metric[];
  calendarActivity: DayMeasure[];
}

export interface StudentMetric {
  name: string;
  img: string;
  nickname: string;
  topic: Topic;
  lab: Lo;
  time: number;
}

export interface StudentLoEvent {
  studentName: string;
  studentId: string;
  studentImg: string;
  courseTitle: string;
  loTitle: string;
  loImage: string;
  loRoute: string;
  loIcon?: IconType;
  timeout: number;
}

export type StudentLoUpdate = (kind: string, event: StudentLoEvent) => void;

export type MetricUpdate = (user: User, topic: Topic, lab: Lo, time: number) => void;
export type MetricDelete = (user: User) => void;
export type StatusChange = (user: User) => void;
export type refreshStudents = (students: StudentMetric[]) => void;
