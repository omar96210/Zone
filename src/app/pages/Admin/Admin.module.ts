import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './Admin.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [ AdminComponent ],
    exports: [ AdminComponent ]
})

export class AdminModule {}
