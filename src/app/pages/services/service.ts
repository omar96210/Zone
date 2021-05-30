import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';



@Injectable()
export class Service {
    num: any = 2;
    apiUrl: any;
    token2 = "ThisIsTheSwaggerToken ";
    order_count: any = 5;
    rate: any = 4;
    seller_id: any = 1;

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient, private router: Router) {
        this.http = http;
        this.apiUrl = 'http://tall3ah.site/';
    }


    GetDashboardData() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/home/get-home')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    GetDrivers() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/driver/get-drivers')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }


    GetAdmin() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/user/get-admins')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    GetUsers() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/user/get-users')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }



    Getmarkets() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/market/get-markets')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    Getproduct() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/food/get-foods')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }



    Getcategories() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/category/get-categories')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    Getfields() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/field/get-fields')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    Getorders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/orders/get-orders')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }
    Getoptions() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/option/get-options')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    GetoptionsSection() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/option-group/get-option-groups')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    Getsliders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/slider/get-sliders')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }


    Adduser(name: any, email: any, phone: any, image: any,role:any,pass:any) {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        let formDataAdduser: FormData = new FormData();
        formDataAdduser.append('name', name);
        formDataAdduser.append('email', email);
        formDataAdduser.append('phone', phone);
        formDataAdduser.append('password',pass);
        formDataAdduser.append('image', "1.png");
        formDataAdduser.append('role', role);
        formDataAdduser.append('device_token', this.token2);
        return this.http.post(this.apiUrl + 'dashboard/user/add-user', formDataAdduser)
    }



    Addcategory(image: any, name: any, status: any) {
        let formDataAddcategory: FormData = new FormData();
        formDataAddcategory.append('image', "1.png");
        formDataAddcategory.append('name', name);
        formDataAddcategory.append('status', status);
        return this.http.post(this.apiUrl + 'dashboard/category/add-category', formDataAddcategory)
    }
    updatecategory(id: any, image: any, name: any, status: any) {
        let formDataupdatecategory: FormData = new FormData();
        formDataupdatecategory.append('id', id);
        formDataupdatecategory.append('image', "1.png");
        formDataupdatecategory.append('name', name);
        formDataupdatecategory.append('status', status);
        return this.http.post(this.apiUrl + 'dashboard/category/update-category', formDataupdatecategory)
    }
    deletecategory(id: any) {
        let formDatadeletecategory: FormData = new FormData();
        formDatadeletecategory.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/category/delete-category', formDatadeletecategory)
    }

    Addslider(image: any) {
        let formDataAddslider: FormData = new FormData();
        formDataAddslider.append('image', "1.png");
        return this.http.post(this.apiUrl + 'dashboard/slider/add-slider', formDataAddslider)
    }
    // updateSlider(id: any,image: any) {
    //     let formDataupdateslider: FormData = new FormData();
    //     formDataupdateslider.append('image', image);
    //     formDataupdateslider.append('id', id);
    //     return this.http.post(this.apiUrl + 'dashboard/slider/add-slider', formDataupdateslider)
    // }
    deleteslider(id: any) {
        let formDatadeleteslider: FormData = new FormData();
        formDatadeleteslider.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/slider/delete-slider', formDatadeleteslider)
    }

    Addshopcategory(image: any, name: any, status: any) {
        let formDataAddshopcategory: FormData = new FormData();
        formDataAddshopcategory.append('image', "1.png");
        formDataAddshopcategory.append('name', name);
        formDataAddshopcategory.append('status', status);
        return this.http.post(this.apiUrl + 'dashboard/field/add-field', formDataAddshopcategory)
    }
    updateshopcategory(id: any, image: any, name: any, status: any) {
        let formDataupdateshopcategory: FormData = new FormData();
        formDataupdateshopcategory.append('id', id);
        formDataupdateshopcategory.append('image', "1.png");
        formDataupdateshopcategory.append('name', name);
        formDataupdateshopcategory.append('status', status);
        return this.http.post(this.apiUrl + 'dashboard/field/update-field', formDataupdateshopcategory)
    }
    deleteshopcategory(id: any) {
        let formDatadeleteshopcategory: FormData = new FormData();
        formDatadeleteshopcategory.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/field/delete-field', formDatadeleteshopcategory)
    }
    Addproductlist(image: any, name: any,categorieslistid:any, ShopsListid: any,detailsForm:any,priceForm:any) {
        let formDataAddproductlist: FormData = new FormData();
        formDataAddproductlist.append('image', "1.png");
        formDataAddproductlist.append('name', name);
        formDataAddproductlist.append('category_id', categorieslistid);
        formDataAddproductlist.append('market_id', ShopsListid);
        formDataAddproductlist.append('desc', detailsForm);
        formDataAddproductlist.append('price', priceForm);
        return this.http.post(this.apiUrl + 'dashboard/food/add-food', formDataAddproductlist)
    }
    updateproductlist(id:any,image: any, name: any, categorieslistid:any,ShopsListid: any,detailsForm:any,priceForm:any) {
        let formDataupdateproductlist: FormData = new FormData();
        formDataupdateproductlist.append('id', id);
        formDataupdateproductlist.append('image', "1.png");
        formDataupdateproductlist.append('name', name);
        formDataupdateproductlist.append('category_id', categorieslistid);
        formDataupdateproductlist.append('market_id', ShopsListid);
        formDataupdateproductlist.append('desc', detailsForm);
        formDataupdateproductlist.append('price', priceForm);
        return this.http.post(this.apiUrl + 'dashboard/food/update-food', formDataupdateproductlist)
    }
    deleteproductlist(id: any) {
        let formDatadeleteproductlist: FormData = new FormData();
        formDatadeleteproductlist.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/food/delete-food', formDatadeleteproductlist)
    }

    Addoptionslist(id: any, name: any) {
        let formDataAddoptionslist: FormData = new FormData();
        formDataAddoptionslist.append('food_id', id);
        formDataAddoptionslist.append('name', name);
        return this.http.post(this.apiUrl + 'dashboard/option-group/add-option-group', formDataAddoptionslist)
    }
    updateoptionslist(id:any,foodid: any, name: any) {
        let formDataupdateoptionslist: FormData = new FormData();
        formDataupdateoptionslist.append('id', id);
        formDataupdateoptionslist.append('food_id', foodid);
        formDataupdateoptionslist.append('name', name);
        return this.http.post(this.apiUrl + 'dashboard/option-group/update-option-group', formDataupdateoptionslist)
    }

    deleteoptionslist(id: any) {
        let formDatadeleteoptionslist: FormData = new FormData();
        formDatadeleteoptionslist.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/option-group/delete-option-group', formDatadeleteoptionslist)
    }
 
    Addmarket(titleForm:any, userid:any,balance:any,image:any,
        field_id:any,lat:any,lng:any,addressForm:any,phoneForm:any
        ,mobileForm:any,Status:any,rate:any,order_count:any,picks:any,summary:any) {
        let formDataAddmarket: FormData = new FormData();
        formDataAddmarket.append('title', titleForm);
        formDataAddmarket.append('user_id', userid);
        formDataAddmarket.append('balance', balance);
        formDataAddmarket.append('image', image);
        formDataAddmarket.append('field_id', field_id);
        formDataAddmarket.append('lat', lat);
        formDataAddmarket.append('lng', lng);
        formDataAddmarket.append('address', addressForm);
        formDataAddmarket.append('phone', phoneForm);
        formDataAddmarket.append('mobile', mobileForm);
        formDataAddmarket.append('status', Status);
        formDataAddmarket.append('rate', rate);
        formDataAddmarket.append('order_count', order_count);
        formDataAddmarket.append('picks', picks);
        formDataAddmarket.append('summary', summary);
        return this.http.post(this.apiUrl + 'dashboard/market/add-market', formDataAddmarket)
    }
    updatemarket(Id:any,titleForm:any, userid:any,balance:any,image:any,
        field_id:any,lat:any,lng:any,addressForm:any,phoneForm:any
        ,mobileForm:any,Status:any,rate:any,order_count:any,picks:any,summary:any) {
        let formDataupdatemarket: FormData = new FormData();
        formDataupdatemarket.append('Id', Id);
        formDataupdatemarket.append('title', titleForm);
        formDataupdatemarket.append('user_id', userid);
        formDataupdatemarket.append('balance', balance);
        formDataupdatemarket.append('image', image);
        formDataupdatemarket.append('field_id', field_id);
        formDataupdatemarket.append('lat', lat);
        formDataupdatemarket.append('lng', lng);
        formDataupdatemarket.append('address', addressForm);
        formDataupdatemarket.append('phone', phoneForm);
        formDataupdatemarket.append('mobile', mobileForm);
        formDataupdatemarket.append('status', Status);
        formDataupdatemarket.append('rate', rate);
        formDataupdatemarket.append('order_count', order_count);
        formDataupdatemarket.append('picks', picks);
        formDataupdatemarket.append('summary', summary);
        return this.http.post(this.apiUrl + 'dashboard/market/update-market', formDataupdatemarket)
    }
    deletemarkets(id: any) {
        let formDatadeletemarkets: FormData = new FormData();
        formDatadeletemarkets.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/market/delete-market', formDatadeletemarkets)
    }

    Addchoices(NameForm: any,priceForm: any,optionsSectionlistid: any,image: any) {
        let formDataAddchoices: FormData = new FormData();
        formDataAddchoices.append('name', NameForm);
        formDataAddchoices.append('price', priceForm);
        formDataAddchoices.append('group_id', optionsSectionlistid);
        formDataAddchoices.append('image', image);
        return this.http.post(this.apiUrl + 'dashboard/option/add-option', formDataAddchoices)
    }
    deleteoptions(id: any) {
        let formDatadeleteoptions: FormData = new FormData();
        formDatadeleteoptions.append('id', id);
        return this.http.post(this.apiUrl + 'dashboard/option/delete-option', formDatadeleteoptions)
    }
    updatechoices(id:any,NameForm: any,priceForm: any,optionsSectionlistid: any,image: any) {
        let formDataupdatechoices: FormData = new FormData();
        formDataupdatechoices.append('Id', id);
        formDataupdatechoices.append('name', NameForm);
        formDataupdatechoices.append('price', priceForm);
        formDataupdatechoices.append('group_id', optionsSectionlistid);
        formDataupdatechoices.append('image', image);
        return this.http.post(this.apiUrl + 'dashboard/option/update-option', formDataupdatechoices)
    }
}
