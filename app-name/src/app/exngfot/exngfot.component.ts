import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exngfot',
  templateUrl: './exngfot.component.html',
  styleUrls: ['./exngfot.component.css']
})
export class ExngfotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courses=[
    { id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'courses3'},
  ];
  onAdd()
  {
    this.courses.push({id:4,name:'course4'});
  }
  onRemove(course:any)
  {
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1);


  }
  onChange(course:any)
  {
    course.name='deepik';
  }
  trackCourse(index:any,course:any)
  {
    return course?course.id:undefined;
  }

}
