import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login-components/login/login.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NoteCardComponent } from './dashboard/note-card/note-card.component';
import { NotesContainerComponent } from './dashboard/notes-container/notes-container.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { WriteNotesComponent } from './dashboard/write-notes/write-notes.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './login-components/register/register.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
import { TrashComponent } from './dashboard/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    NoteCardComponent,
    NotesContainerComponent,
    WriteNotesComponent,
    DashComponent,
    RegisterComponent,
    ArchiveComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
