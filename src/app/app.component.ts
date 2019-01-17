import { Component } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app';
    data = [];
    showdata = "";
    constructor(public http: HttpClient) { 
    	this.getdata();
    	var _this = this;
    	setInterval(function(){ _this.getdata(); }, 10000);
    }

	getdata() {
		var _this = this;

		this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story').subscribe(res => {
          this.data = res['hits'];
        })
	}

	openModal(i) {

		var modal = document.getElementById('myModal');
		modal.style.display = "block";
		this.showdata = JSON.stringify(this.data[i]);
	}

	closeModal() {
		var modal = document.getElementById('myModal');
		modal.style.display = "none";
	}
}
