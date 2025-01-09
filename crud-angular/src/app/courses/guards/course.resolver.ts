import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

// @Injectable({
//   providedIn:'root'
// })

export const CourseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: CoursesService = inject(CoursesService)
): Observable<Course> => {
    return loadCourse(route, service)
};


function loadCourse(route: ActivatedRouteSnapshot, service: CoursesService): Observable<Course> {
  if (route.params && route.params['id']) {
    const courseId = route.params['id'];
    return service.loadById(courseId);
  }
  return of({
    _id: '',
    name: '',
    category: '',
    lessons: [],
  });
}


// export class CourseResolver implements Resolve<Course> {

//   constructor(private service: CoursesService) {}

//   resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<Course> {
//     if (route.params && route.params['id']) {
//       return this.service.loadById(route.params['id']);
//     }
//     return of({_id:'', name:'', category:'', lessons: []});
//   }
// };
