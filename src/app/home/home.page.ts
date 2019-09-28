  import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerguntasPage } from '../perguntas/perguntas.page';
//import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(/*private nativePageTransitions: NativePageTransitions,*/ public navCrtl: NavController) {}
  ionViewWillLeave() {

    let options: NativeTransitionOptions = {
       direction: 'up',
       duration: 500,
       slowdownfactor: 3,
       slidePixels: 20,
       iosdelay: 100,
       androiddelay: 150,
       fixedPixelsTop: 0,
       fixedPixelsBottom: 60
      }
   
    this.nativePageTransitions.slide(options)
      .then(onSuccess)
      .catch(onError);
   
   }
   
   
   // example of adding a transition when pushing a new page
   openPage(page: any) {
   
     this.nativePageTransitions.slide(options);
     this.navCtrl.push(page);
   
   }
   trocaPagina(pag){
      if(pag = 'perguntas')
        this.navCrtl.push(PerguntasPage);
   }
}
