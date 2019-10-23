import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './core/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {MatCardModule} from '@angular/material/card';
import { TodoEditComponent } from './admin/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AdminComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  entryComponents: [
   TodoEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
