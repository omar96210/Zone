import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateProductlistComponent } from './UpdateProductlist.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule, RouterModule, CommonModule,TranslateModule ],
    declarations: [  UpdateProductlistComponent],
    exports: [ UpdateProductlistComponent  ]
})

export class UpdateProductlisttModule {}
