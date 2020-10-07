import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Asn1PipePipe } from './asn-1-pipe.pipe';
import { Asn1DirectiveDirective } from './asn-1-directive.directive';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Asn1PipePipe,
    Asn1DirectiveDirective,
    ContentCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
