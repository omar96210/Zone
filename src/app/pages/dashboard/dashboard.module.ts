import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [ DashboardComponent ],
    exports: [ DashboardComponent ]
})

export class DashboardModule {}
