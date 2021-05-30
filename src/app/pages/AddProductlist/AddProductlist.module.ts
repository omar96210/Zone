import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductlistComponent } from './AddProductlist.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule, RouterModule, CommonModule,TranslateModule ],
    declarations: [  AddProductlistComponent],
    exports: [ AddProductlistComponent  ]
})

export class AddProductlistModule {}
