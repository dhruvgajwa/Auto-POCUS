import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { HttpClient } from '@angular/common/http';
import {fetch as fetchPolyfill} from 'whatwg-fetch'
@Component({
  selector: 'app-tensorflow-c',
  templateUrl: './tensorflow-c.component.html',
  styleUrls: ['./tensorflow-c.component.css']
})
export class TensorflowCComponent implements OnInit {
  newImg ;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('../../../assets/MainImage.jpeg', { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          var base64data = reader.result;                
              console.log(base64data);
              this.newImg =  loadtf(base64data);
            // document.getElementById('image').attributes
        }

        reader.readAsDataURL(res); 
        console.log(res);
      });
    
  }
  

}
async function loadtf(base64data) {
  
  window.fetch = fetchPolyfill; 
  // const modelUrl = 'file://';

  const model = await tf.loadLayersModel('file://../../../assets/newP/model.json');
    const prediction = model.predict(base64data);
    return prediction;
}