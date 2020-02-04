import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-captured',
  templateUrl: './captured.component.html',
  styleUrls: ['./captured.component.css']
})
export class CapturedComponent implements OnInit {

  id:string= '';
  constructor(private activatedRoute:ActivatedRoute , private router:Router) {
      console.log(this.activatedRoute.params.subscribe( d => {
        console.log(d.id);
        this.id = d.id;
      }) )
   }
  ngOnInit() {
  }

  getImageSRC(){
    if(this.id === 'fetalhead') {
      return '../../../assets/MainImage.jpeg';
    } else if( this.id === 'fetalabdomen') {
      return '../../../assets/abdomenUltra.PNG';
    }  else if( this.id === 'fetalskull') {
      return '../../../assets/skullImage.PNG';
    }else {
      return '../../../assets/MainImage.jpeg';
    }
     
  }

  getImageR11SRC(){ 
    if(this.id === 'fetalhead') {
      return '../../../assets/../../../assets/cerebellum.PNG';
    } else if( this.id === 'fetalabdomen') {
      return '../../../assets/abdomenFill.PNG';
    }else if( this.id === 'fetalskull') {
      return '../../../assets/skullImageSegmented.PNG';
    } else {
      return '../../../assets/../../../assets/cerebellum.PNG';
    }
     
  }
}
