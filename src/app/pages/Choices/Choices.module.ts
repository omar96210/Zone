import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChoicesComponent } from './Choices.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule,  RouterModule, CommonModule,TranslateModule ],
    declarations: [ ChoicesComponent ],
    exports: [ ChoicesComponent ]
})

export class ChoicesModule {}
