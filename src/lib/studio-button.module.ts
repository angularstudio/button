import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { MatButtonModule }       from '@angular/material/button';
import { StudioButtonComponent } from './studio-button.component';

@NgModule({

    declarations: [ StudioButtonComponent ],
    imports: [ MatButtonModule, CommonModule ],
    exports: [ StudioButtonComponent ]

})
export class StudioButtonModule {
}
