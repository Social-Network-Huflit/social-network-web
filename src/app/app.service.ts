import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppService{
    showDrawer = new EventEmitter<boolean>();

    toggleDrawer(value: boolean){
        this.showDrawer.emit(value);
    }
}