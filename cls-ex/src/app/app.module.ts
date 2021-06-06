import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components copy/about/about.component';
import { AddTaskComponent } from './components copy/add-task/add-task.component';
import { ButtonComponent } from './components copy/button/button.component';
import { FooterComponent } from './components copy/footer/footer.component';
import { HeaderComponent } from './components copy/header/header.component';
import { TaskItemComponent } from './components copy/task-item/task-item.component';
import { TaskComponent } from './components copy/task/task.component';

const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  { path: 'about', component: AboutComponent },
  { path: 'new', component: AddTaskComponent },
  { path: '', component: TaskComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, ButtonComponent,
    TaskComponent,
    TaskItemComponent,
    AboutComponent,
    FooterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
