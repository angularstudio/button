import { Component, Input } from '@angular/core';
import { StudioButton }     from './studio-button';

@Component({

    selector: 'studio-button',

    template: `

        <div class="wrapper" [class.collapsed]="collapsed">

            <button mat-raised-button [style.background-color]="button.backgroundColor"
                    [style.width]="button.width">

                <i *ngIf="button.iconClass" [class]="button.iconClass"></i>

                <span *ngIf="!collapsed">{{ button.label }}</span>

            </button>

        </div>

    `,

    styleUrls: [ 'studio-button.component.scss' ]

})
export class StudioButtonComponent {

    @Input() public button: StudioButton;
    @Input() public collapsed: boolean;

}
