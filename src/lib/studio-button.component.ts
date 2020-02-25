import { Component, Input } from '@angular/core';
import { StudioButton }     from './studio-button';

@Component({

    selector: 'studio-button',

    template: `

        <div class="wrapper">

            <button mat-raised-button [style.background-color]="button.backgroundColor"
                    [style.width]="button.width">

                {{ button.label }}

            </button>

        </div>

    `,

    styleUrls: [ 'studio-button.component.scss' ]

})
export class StudioButtonComponent {

    @Input() public button: StudioButton;

}
