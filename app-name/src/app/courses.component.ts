import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template:`
   
    
   <button  class="btn" [style.backgroundColor]="isActive?'blue' :'white' " ></button>
 <div (click)="onDivClick()"> <button (click)="onSave($event)">Save</button>
</div>

<input [(ngModel)]="email"  (keyup.enter)="  onKeyUp()"/>
   `

})
export  class CoursesComponent
{

  isActive=true;
onSave($event:any)
{
    
    $event.stopPropagation();
    console.log("button clicked",$event);
 
}
onDivClick()
{
    console.log("On div clicked");
}
email="me @ex.com";
onKeyUp()
{
     console.log(this.email);
}

}