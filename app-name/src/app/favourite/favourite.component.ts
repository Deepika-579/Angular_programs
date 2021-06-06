import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

 @Input() isFavourite:boolean;
 @Output() change=new EventEmitter();

canSave=true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.isFavourite=!this.isFavourite;
  }
  onButtonClicked()
  {
    this.change.emit();
    console.log("button clicked");
  }

  
}
