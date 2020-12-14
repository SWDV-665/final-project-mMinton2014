import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }


  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Task' : 'Add Task',
      message: item ? "Please edit Task..." : "Please enter Task...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Task Name...',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Task Description...',
          value: item ? item.quantity : null 
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else{
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    prompt.present();
  }

}
