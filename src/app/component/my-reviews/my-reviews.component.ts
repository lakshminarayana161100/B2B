import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  star=[1,2,3,4,5];
  rating=0;

  stars=[1,2,3,4,5];
  ratings=0;

  updateRating(r:any){
    console.log(r)
    this.rating = r
  }
    updateRatin(r:any){
      console.log(r)
      this.ratings = r
    
    
  }

}
