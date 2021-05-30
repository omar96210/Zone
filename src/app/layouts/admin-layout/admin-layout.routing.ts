import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { AdminComponent } from '../../pages/Admin/Admin.component';
import { driversComponent } from '../../pages/drivers/drivers.component';
import { UsersComponent } from '../../pages/Users/Users.component';
import { cityComponent } from '../../pages/city/city.component';
import { categoriesComponent } from '../../pages/categories/categories.component';
import { productlistComponent } from '../../pages/productlist/productlist.component';
import { ChoicesComponent } from '../../pages/Choices/Choices.component';
import { ChoiceslistComponent } from '../../pages/Choiceslist/Choiceslist.component';
import { ordersComponent } from '../../pages/orders/orders.component';
import { CouponsComponent } from '../../pages/Coupons/Coupons.component';
import { ShopscategorieComponent } from '../../pages/Shopscategorie/Shopscategorie.component';
import { ShopsListComponent } from '../../pages/ShopsList/ShopsList.component';
import { SettingsComponent } from '../../pages/Settings/Settings.component';
import { AddDriversComponent } from '../../pages/AddDrivers/AddDrivers.component';
import { AddAdminComponent } from '../../pages/AddAdmin/AddAdmin.component';
import { AddUsersComponent } from '../../pages/AddUsers/AddUsers.component';
import { slidersComponent } from '../../pages/sliders/sliders.component';
import { AddProductlistComponent } from '../../pages/AddProductlist/AddProductlist.component';
import { UpdateProductlistComponent } from '../../pages/UpdateProductlist/UpdateProductlist.component';
import { AddMarketComponent } from '../../pages/AddMarket/AddMarket.component';
import { UpdateMarketComponent } from '../../pages/UpdateMarket/UpdateMarket.component';
import { AddChoiceslistComponent } from '../../pages/AddChoiceslist/AddChoiceslist.component';
import { UpdateChoiceslistComponent } from '../../pages/UpdateChoiceslist/UpdateChoiceslist.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'Admin',  component: AdminComponent },
    { path: 'drivers',  component: driversComponent },
    { path: 'Users',  component: UsersComponent },
    { path: 'City',  component: cityComponent },
    { path: 'Categories',  component: categoriesComponent },
    { path: 'productlist',  component: productlistComponent },
    { path: 'Choices',  component: ChoicesComponent },
    { path: 'Choiceslist',  component: ChoiceslistComponent },
    { path: 'orders',  component: ordersComponent },
    { path: 'Coupons',  component: CouponsComponent },
    { path: 'Shopscategorie',  component: ShopscategorieComponent },
    { path: 'ShopsList',  component: ShopsListComponent },
    { path: 'Settings',  component: SettingsComponent },
    { path: 'AddDrivers',  component: AddDriversComponent },
    { path: 'AddAdmin',  component: AddAdminComponent },
    { path: 'AddUsers',  component: AddUsersComponent },
    { path: 'sliders',  component: slidersComponent },
    { path: 'AddProductlist',  component: AddProductlistComponent },
    { path: 'UpdateProductlist/:id',  component: UpdateProductlistComponent },
    { path: 'AddMarket',  component: AddMarketComponent },
    { path: 'UpdateMarket/:id',  component: UpdateMarketComponent },
    { path: 'AddChoiceslist',  component: AddChoiceslistComponent },
    { path: 'UpdateChoiceslist/:id',  component: UpdateChoiceslistComponent },

    
    
];
