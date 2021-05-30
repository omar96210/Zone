import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddMarketComponent } from './AddMarket.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule, RouterModule, CommonModule,TranslateModule ],
    declarations: [  AddMarketComponent],
    exports: [ AddMarketComponent  ]
})

export class AddMarkettModule {}
