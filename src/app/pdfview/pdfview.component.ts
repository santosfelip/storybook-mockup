import { Component } from '@angular/core';

@Component({
    selector: 'app-pdfview',
    templateUrl: './pdfview.component.html',
    styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent {

    public pdfSrc: string;

    constructor() {
        this.pdfSrc = "http://localhost:4200/assets/pdf-test.pdf";
    }
}
