import { Routes } from "@angular/router";
import { CoursesComponent } from "./containers/courses/courses.component";
import { CourseFormComponent } from "./containers/course-form/course-form.component";
import { CourseResolver } from "./guards/course.resolver";

export const COURSES_ROUTE: Routes = [
  {path:"", component: CoursesComponent},
  {path:"new", component: CourseFormComponent, resolve: {course: CourseResolver}},
  {path:"edit/:id", component: CourseFormComponent, resolve: {course: CourseResolver}}

];
