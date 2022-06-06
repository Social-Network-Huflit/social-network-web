import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CollectionService{
    public showNavLeft = new EventEmitter<boolean>();

    onToggleNavLeft(value: boolean){
        this.showNavLeft.emit(value);
    }
}