import {Component} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtCellAlign} from "./mdt-cell-align.directive";

@Component({
    moduleId: module.id,
    selector: '[mdt-rows]',
    templateUrl: 'mdt-rows.html',
    styleUrls: ['main.css'],
    directives: [MdtCellAlign]
})
export class MdtRows{
    constructor(public dataService: DataService){

    }
}