import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddAdminComponent } from './AddAdmin.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [  AddAdminComponent],
    exports: [ AddAdminComponent  ]
})

export class AddAdminModule {}
