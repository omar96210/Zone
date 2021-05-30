import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddChoiceslistComponent } from './AddChoiceslist.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule, RouterModule, CommonModule,TranslateModule ],
    declarations: [  AddChoiceslistComponent],
    exports: [ AddChoiceslistComponent  ]
})

export class AddChoiceslistModule {}
