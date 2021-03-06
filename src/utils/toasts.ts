import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class Toasts {

    toastController: ToastController;

    constructor(toastController: ToastController) {
        this.toastController = toastController;
    }
    
    async presentToast(message: string)
    {
      const toast = this.toastController.create({
        message: message,
        duration: 2000
      });
      await toast.present()
    }

}