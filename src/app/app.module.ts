import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PdfviewComponent } from './pdfview/pdfview.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        PdfviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PdfViewerModule,
        FormsModule,
        IonicModule.forRoot()

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
