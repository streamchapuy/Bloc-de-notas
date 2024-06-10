import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './Components/padre/padre.component';
import { HijoComponent } from './Components/hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { EmoticonToEmojiPipe} from './emojis';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    EmoticonToEmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
