import { Course } from "./course";

export interface CoursePage {
  courses: Course[];
  totalElements: number;
  totalPage: number;
}
