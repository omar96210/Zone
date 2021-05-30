import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChoiceslistComponent } from './Choiceslist.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [ ChoiceslistComponent ],
    exports: [ ChoiceslistComponent ]
})

export class ChoiceslistModule {}
