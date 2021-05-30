import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddDriversComponent } from './AddDrivers.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [  AddDriversComponent],
    exports: [ AddDriversComponent  ]
})

export class AddDriversModule {}
