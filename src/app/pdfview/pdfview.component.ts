import { Component, Input } from '@angular/core';
import { LINK_PDF } from '../util/utilities';
@Component({
    selector: 'app-pdfview',
    templateUrl: './pdfview.component.html',
    styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent {


    @Input() public zoomValue: number;
    @Input() public rotationValue: number;
    @Input() public pdfSrc: string;
    @Input() public colorButton: string;

    constructor() {
        this.pdfSrc = LINK_PDF;
        this.zoomValue = 1;
        this.rotationValue = 0;
        this.colorButton = "#ff0000";
    }

    public onZoom(isAdd: boolean): void {
        if (isAdd) {
            this.zoomValue = this.zoomValue + 0.1;
        } else {
            this.zoomValue = this.zoomValue - 0.1;
        }
    }

    public onRotation(): void {
        this.rotationValue = this.rotationValue + 90;
    }
}
