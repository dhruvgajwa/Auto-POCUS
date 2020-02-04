import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {
  id:string= '';
    
  heading: string = '';
  constructor(private activatedRoute:ActivatedRoute , private router:Router) {
    this.activatedRoute.params.subscribe( d => {
        // console.log(d.id);
        this.id = d.id;
        if(d.id === 'fetallimbs'){
          this.heading = 'Femur';
        } else if(d.id === 'fetalhead'){
          this.heading = 'Head';
        } else if(d.id === 'fetalabdomen'){
          this.heading = 'Abdomen';
        } else if(d.id === 'fetalface'){
          this.heading = 'Face';
        } else if(d.id === 'fetalskull'){
          this.heading = 'Skull';
        } 
        else {
          this.heading = d.id;
        }
      
    
      });
   }

  ngOnInit() {

   let myVideo = (document.getElementById('video') as HTMLVideoElement);
   let redbtn = document.getElementById('redbtn');
   let greenbtn = document.getElementById('greenbtn'); 
   redbtn.style.visibility = 'visible';
   greenbtn.style.visibility = 'hidden';

  
   myVideo.onload = function(){
     console.log('loaded');
     
   }
  
   if(this.heading === 'Abdomen') {
    myVideo.play().then(()=> {
      redbtn.style.visibility = 'visible';
     console.log('started playing');
     
     setTimeout(function(){
      console.log('Make capture green');
      redbtn.style.visibility = 'hidden';
      greenbtn.style.visibility = 'visible';
      console.log( myVideo.currentTime);
     }, 6000);


     
     setTimeout(function(){
      console.log('10 seconds');
      // redbtn.style.visibility = 'visible';
      // greenbtn.style.visibility = 'hidden';
      myVideo.pause();
     }, 10000);

     setTimeout(function(){
      console.log('12 seconds');
  
      console.log( myVideo.preload);
      console.log( myVideo.currentTime);
     }, 11000);
   });


   } else if(this.heading === 'Femur') {
   
    myVideo.play().then(()=> {
      myVideo.currentTime = 10;
      redbtn.style.visibility = 'visible';
     console.log('started playing');
     
     setTimeout(function(){
      console.log('Make capture green');
      redbtn.style.visibility = 'hidden';
      greenbtn.style.visibility = 'visible';
      console.log( myVideo.currentTime);
     }, 6000);


     
     setTimeout(function(){
      console.log('10 seconds');
      // redbtn.style.visibility = 'visible';
      // greenbtn.style.visibility = 'hidden';
      // console.log( myVideo.preload);
      // console.log( myVideo.currentTime);
      myVideo.pause();
     }, 10500);

     setTimeout(function(){
      console.log('12 seconds');
     
      console.log( myVideo.preload);
      console.log( myVideo.currentTime);
     }, 12000);
   });
    

   } else if(this.heading === 'Head') {
   
    myVideo.play().then(()=> {
      myVideo.currentTime = 35;
      redbtn.style.visibility = 'visible';
     console.log('started playing');
     
     setTimeout(function(){
      console.log('Make capture green');
      redbtn.style.visibility = 'hidden';
      greenbtn.style.visibility = 'visible';
      console.log( myVideo.currentTime);
     }, 2000);


     
     setTimeout(function(){
      console.log('10 seconds');
      // redbtn.style.visibility = 'visible';
      // greenbtn.style.visibility = 'hidden';
      console.log( myVideo.preload);
      console.log( myVideo.currentTime);
      myVideo.pause();
     }, 4200);
          
   

     
   });
    

   } else if(this.heading === 'Face') {
   
    myVideo.play().then(()=> {
      myVideo.currentTime = 50;
      redbtn.style.visibility = 'visible';
     console.log('started playing');
     
     setTimeout(function(){
      console.log('Make capture green');
      redbtn.style.visibility = 'hidden';
      greenbtn.style.visibility = 'visible';
      console.log( myVideo.currentTime);
     }, 4000);


     
     setTimeout(function(){
      console.log('10 seconds');
      // redbtn.style.visibility = 'visible';
      // greenbtn.style.visibility = 'hidden';
      // console.log( myVideo.preload);
      console.log( myVideo.currentTime);
      myVideo.pause();
     }, 8000);

     
   });
    

   }else if(this.heading === 'Skull') {
   
    redbtn.style.visibility = 'hidden';
    greenbtn.style.visibility = 'visible';
    
   }

       

  }
 

  NavigateToCapture(){
this.router.navigate(['/captured/' + this.id]);
  }
}
