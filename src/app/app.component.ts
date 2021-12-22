import { Component } from '@angular/core';
import * as jquery from 'jquery';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
 
   
}





// jquery 
$(document).on('click', 'ul li',function(){
  $(this).addClass('active').siblings().removeClass('active');
});
