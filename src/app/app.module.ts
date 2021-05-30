import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";


import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { SidebarModule } from './sidebar/sidebar.module';
import { AdminModule } from './pages/Admin/Admin.module';
import { driversModule } from './pages/drivers/drivers.module';
import { cityModule } from './pages/city/city.module';
import { UsersModule } from './pages/Users/Users.module';
import { categoriesModule } from './pages/categories/categories.module';
import { productlistModule } from './pages/productlist/productlist.module';
import { ChoicesModule } from './pages/Choices/Choices.module';
import { ChoiceslistModule } from './pages/Choiceslist/Choiceslist.module';
import { ordersModule } from './pages/orders/orders.module';
import { CouponsModule } from './pages/Coupons/Coupons.module';
import { ShopscategorieModule } from './pages/Shopscategorie/Shopscategorie.module';
import { ShopsListModule } from './pages/ShopsList/ShopsList.module';
import { SettingsModule } from './pages/Settings/Settings.module';
import { AddDriversModule } from './pages/AddDrivers/AddDrivers.module';
import { AddAdminModule } from './pages/AddAdmin/AddAdmin.module';
import { AddUsersModule } from './pages/AddUsers/AddUsers.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { slidersModule } from './pages/sliders/sliders.module';
import { AddProductlistModule } from './pages/AddProductlist/AddProductlist.module';
import { UpdateProductlisttModule } from './pages/UpdateProductlist/UpdateProductlist.module';
import { AddMarkettModule } from './pages/AddMarket/AddMarket.module';
import { UpdateMarketModule } from './pages/UpdateMarket/UpdateMarket.module';
import { AddChoiceslistModule } from './pages/AddChoiceslist/AddChoiceslist.module';
import { UpdateChoiceslistModule } from './pages/UpdateChoiceslist/UpdateChoiceslist.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Service } from './pages/services/service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    AdminModule,
    driversModule,
    cityModule,
    UsersModule,
    categoriesModule,
    productlistModule,
    ChoicesModule,
    ChoiceslistModule,
    ordersModule,
    CouponsModule,
    ShopscategorieModule,
    ShopsListModule,
    SettingsModule,
    AddDriversModule,
    AddAdminModule,
    AddUsersModule,
    UpdateMarketModule,
    AddChoiceslistModule,
    UpdateChoiceslistModule,
    
    DashboardModule,
    slidersModule,
    AddProductlistModule,
    UpdateProductlisttModule,
    AddMarkettModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [Service],
  bootstrap: [AppComponent]
  , exports: [
    TranslateModule
  ]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}