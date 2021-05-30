import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CouponsComponent } from './Coupons.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [ CouponsComponent ],
    exports: [ CouponsComponent ]
})

export class CouponsModule {}
