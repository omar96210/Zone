import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


export interface RouteInfo {
    path: string;
    title: string;
 
}

export const ROUTES: RouteInfo[] = [
    
    { path: '/dashboard',     title: 'dashboard'    },
    { path: '/drivers',       title: 'Drivers'    },
    { path: '/Admin',       title: 'Managers'    },
    { path: '/Users',       title: 'Customer'    },
    { path: '/City',       title: 'City'    },
    { path: '/Categories',       title: 'categories'    },
    { path: '/productlist',       title: 'productlist'    },
    { path: '/Choices',       title: 'Choices'    },
    { path: '/Choiceslist',       title: 'Choiceslist'    },
    { path: '/orders',       title: 'orders'    },
    { path: '/Coupons',       title: 'Coupons'    },
    { path: '/Shopscategorie',       title: 'Shopscategorie'    },
    { path: '/ShopsList',       title: 'ShopsList'    },
    { path: '/Settings',       title: 'Settings'    },
    { path: '/sliders',       title: 'sliders'    },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    status1:any=true;
    status2:any=true;
    status3:any=true;
    icon1:any="";
    icon2:any="";
    icon3:any="";

    
    isLoaded:any=true;
    public menuItems: any[];
    currentLang1: any;
    idnestednav: any;
    constructor(public translate:TranslateService){}
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
        this.currentLang1=this.translate.currentLang;

    }

    get(){
        this.currentLang1=this.translate.currentLang;

    }
    opennestednav(id:any){
        this.idnestednav=id;

        if(this.idnestednav==="1"){
            if(this.status1===""){
                this.status1=true;
                this.icon1="";
            }else{
                this.status1="";
                this.icon1=true;
            }
            this.status2=true;
            this.status3=true;
            this.icon2="";
            this.icon3="";

        }else if(this.idnestednav=="2"){
            if(this.status2===""){
                this.status2=true;
                this.icon2="";
            }else{
                this.status2="";
                this.icon2=true;
            }
            this.status1=true;
            this.status3=true;
            this.icon1="";
            this.icon3="";

        }else if(this.idnestednav=="3"){
            if(this.status3===""){
                this.status3=true;
                this.icon3="";
            }else{
                this.status3="";
                this.icon3=true;
            }
            this.status1=true;
            this.status2=true;
            this.icon1="";
            this.icon2="";
        }else if(this.idnestednav=="0"){
            this.status1=true;
            this.status2=true;
            this.status3=true;
            this.icon1="";
            this.icon2="";
            this.icon3="";


        }



    }
    
}
