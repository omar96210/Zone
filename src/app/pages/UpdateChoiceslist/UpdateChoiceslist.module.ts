import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateChoiceslistComponent } from './UpdateChoiceslist.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule, RouterModule, CommonModule,TranslateModule ],
    declarations: [  UpdateChoiceslistComponent],
    exports: [ UpdateChoiceslistComponent  ]
})

export class UpdateChoiceslistModule {}
