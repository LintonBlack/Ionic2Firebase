import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public angFire: AngularFire) {
  	this.items = this.angFire.database.list('/Items');
  	console.log(this.items);
  }

  addItem():void {
  	let prompt = this.alertCtrl.create({
  		title:'Item title and author',
  		message :'Enter the item title and author',
  		inputs: [
	  		{
	  			name:'title',
	  			placeholder:"Item title"
	  		},
	  		{
	  			name:'author',
	  			placeholder:"Author name"
  			}
  		],
  		buttons: [
	  		{
	  			text:'Cancel',
	  			handler: data => {
	  				console.log("cancel clicked");
	  			}
	  		},
	  		{
	  			text:'Save',
	  			handler: data => {
	  				this.items.push({
	  					title: data.title,
	  					author: data.author
	  				})
	  			}
  			}
  		]
  	});

  	prompt.present();
  }

  editItem(item):void {
  	let prompt = this.alertCtrl.create({
  		title:'Edit Item',
  		message :'Edit the item title and author',
  		inputs: [
	  		{
	  			name:'title',
	  			placeholder:item.title
	  		},
	  		{
	  			name:'author',
	  			placeholder:item.author
  			}
  		],
  		buttons: [
	  		{
	  			text:'Cancel',
	  			handler: data => {
	  				console.log("cancel clicked");
	  			}
	  		},
	  		{
	  			text:'Save',
	  			handler: data => {
	  				let newTitle:string = item.title;
	  				let newAuthor:string = item.author;
	  				
	  				if(data.title !='') {
	  					newTitle = data.title;
	  				}

	  				if(data.author !='') {
	  					newAuthor = data.author;
	  				}

	  				this.items.update(item.$key, {
	  					title: newTitle,
	  					author: newAuthor
	  				})
	  			}
  			}
  		]
  	});

  	prompt.present();
  }

  deleteItem(itemID):void {
  	let prompt = this.alertCtrl.create({
  		title:'Delete Item', 	
  		
  		buttons: [
	  		{
	  			text:'Cancel',
	  			handler: data => {
	  				console.log("cancel clicked");
	  			}
	  		},
	  		{
	  			text:'Delete Item',
	  			handler: data => {
	  				this.items.remove(itemID)
	  			}
  			}
  		]
  	});

  	prompt.present();
  }
}
