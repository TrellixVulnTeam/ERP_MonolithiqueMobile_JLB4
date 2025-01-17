import {User} from "../../modals/User";
export interface IToken {
    access_token: string
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import {environmentApi} from "./environnement.model";
@Injectable({
    providedIn: 'root'
})
export class AuthentificationServiceService {
    private host:string="https://2fa3-196-179-94-188.eu.ngrok.io/api";
    private jwt:string="";
    private jwToken:any;
    private roles:Array<any>=[];
    user:User;
    constructor(private http:HttpClient) { }

    login(user:any):any{
        
        return this.http.post<IToken>(environmentApi.host+"/login",user,{observe:'response'});
    }
    saveToken(jwt:any){
        this.jwToken=jwt;
        localStorage.setItem('token',jwt);
        let jwtHelper=new JwtHelperService();
        this.roles=jwtHelper.decodeToken(this.jwToken).groups;
    }
    loadToken(){
        this.jwToken=localStorage.getItem('token');
    }
    getToken():string | null{
        return localStorage.getItem('token');
    }
    getGroups(){
        if(this.jwToken==null){this.loadToken();}
        console.log("jwt pour get"+this.jwToken)
        return this.http.get(this.host+"/api/group/groups",{headers:new HttpHeaders({'Authorization':this.jwToken})});
    }
    logout(){
        this.jwToken=null;
        localStorage.removeItem('token');
    }
    isAdmin(){
        for(let r of this.roles){
            if(r.authority=="ADMIN"){return true;}
        }
        return false;
    }
    saveGroup(group:any){
        let headers=new HttpHeaders();
        headers.append('Authorization',this.jwToken);
        return this.http.post(this.host+"/api/group",group,{headers:new HttpHeaders({'Authorization':this.jwToken})});
    }
    isLogged() : boolean{
        const token = localStorage.getItem('token');
        return !!token;

    }
    getCurrentUser(): Observable<User> {
        return this.http.get<User>(this.host+"/api/user/getCurretnUser");
    }
    async getUser(){
        await this.getCurrentUser().subscribe((data)=>{this.user=data;console.log(this.user.login)});
    }
}

