import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopscategorieComponent } from './Shopscategorie.component';
import { TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule, RouterModule, CommonModule,TranslateModule ],
    declarations: [ ShopscategorieComponent ],
    exports: [ ShopscategorieComponent ]
})

export class ShopscategorieModule {}
