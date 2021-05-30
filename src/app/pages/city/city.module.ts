import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cityComponent } from './city.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [ cityComponent ],
    exports: [ cityComponent ]
})

export class cityModule {}
