import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-components/login/login.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { WriteNotesComponent } from './dashboard/write-notes/write-notes.component';
import { NotesContainerComponent } from './dashboard/notes-container/notes-container.component';
import { RegisterComponent } from './login-components/register/register.component';
import { TrashComponent } from './dashboard/trash/trash.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dash',
    component:DashComponent,
    canActivate:[authGuard],
    children:[
      {
        path:'writeNotes',
        component:WriteNotesComponent,
        children:[
          {
            path:'',
            component:NotesContainerComponent
          }
        ]
      },
      {
        path:'trash',
        component:TrashComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
