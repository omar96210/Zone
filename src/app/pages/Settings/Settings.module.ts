import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './Settings.component';
import { TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule,TranslateModule ],
    declarations: [ SettingsComponent ],
    exports: [ SettingsComponent ]
})

export class SettingsModule {}
