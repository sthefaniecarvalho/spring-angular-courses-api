import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { CoursePage } from '../../model/course-page';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoursesListComponent } from '../../components/courses-list/courses-list.component';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatToolbarModule, CoursesListComponent, MatPaginatorModule, MatProgressSpinnerModule, AsyncPipe]
})
export class CoursesComponent implements OnInit {

  courses$: Observable<CoursePage> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSize = 0;
  pageIndex = 0;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ){
    this.refresh();
  }

  refresh(pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 10}) {
    this.courses$ = this.coursesService.list(pageEvent.pageIndex, pageEvent.pageSize)
    .pipe(
      tap(() => {
        this.pageIndex = pageEvent.pageIndex
        this.pageSize = pageEvent.pageSize
      }),
      catchError(() => {
        this.onError('Erro ao carregar cursos.')
        return of({courses: [], totalElements: 0, totalPage: 0})
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route
    };
    this.router.navigate(['new'], navigationExtras);
  }

  onEdit(course: Course) {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route
    };
    this.router.navigate(['edit', course._id], navigationExtras);
  }

  onRemove(course: Course) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Tem certeza que deseja excluir esse curso?",
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.coursesService.delete(course._id)
        .pipe(
          tap(() => {
            this.refresh();
            this.snackBar.open("Curso deletedo com sucesso", "X",
            {duration: 5000,
            verticalPosition:"top",
            horizontalPosition:"center"
            });
          }),
          catchError(async () => this.onError("Erro ao remover o curso.")),
        ).subscribe();
      }
    });
  }
}
