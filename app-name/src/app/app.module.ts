import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FavouriteComponent } from './favourite/favourite.component';

import { RouterModule } from '@angular/router';
import { ExngfotComponent } from './exngfot/exngfot.component';
import { ButtonCheckComponent } from './button-check/button-check.component';
import { InputFormatDirective } from './input-format.directive';
import { BootstrapcheckComponent } from './bootstrapcheck/bootstrapcheck.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,CoursesComponent, ButtonComponent, HeaderComponent, FavouriteComponent, ExngfotComponent, ButtonCheckComponent, InputFormatDirective, BootstrapcheckComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




function routes(routes: any, arg1: { enableTracing: true; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

