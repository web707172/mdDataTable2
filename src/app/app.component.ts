import {Component} from '@angular/core';
import {MdDataTable} from './components/md-data-table.directive';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [MdDataTable]
})
export class AppComponent {
    rowList:Array<any>;
    columnList:Array<any>;

    constructor() {

        this.columnList = [
            {
                dataKey: 'name',
                name: 'Dessert (100g serving)'
            },{
                dataKey: 'calories',
                name: 'Calories'
            },{
                dataKey: 'fat',
                name: 'Fat (g)'
            },{
                dataKey: 'carbs',
                name: 'Carbs (g)'
            },{
                dataKey: 'protein',
                name: 'Protein (g)'
            },{
                dataKey: 'sodium',
                name: 'Sodium (g)'
            },{
                dataKey: 'calcium',
                name: 'Calcium (%)'
            },{
                dataKey: 'iron',
                name: 'Iron (%)'
            },
        ];

        this.rowList = [
            {
                id: 601,
                name: 'Frozen joghurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 87,
                calcium: '14%',
                iron: '1%'
            },
            {
                id: 602,
                name: 'Ice cream sandwitch',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                sodium: 129,
                calcium: '84%',
                iron: '1%'
            },
            {
                id: 603,
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 24,
                protein: 6.0,
                sodium: 337,
                calcium: '6%',
                iron: '7%'
            },
            {
                id: 604,
                name: 'Cupkake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                sodium: 413,
                calcium: '3%',
                iron: '8%'
            },
            {
                id: 605,
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 2.9,
                sodium: 327,
                calcium: '7%',
                iron: '16%'
            },
            {
                id: 606,
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                sodium: 50,
                calcium: '0%',
                iron: '0%'
            },
            {
                id: 607,
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                sodium: 38,
                calcium: '0%',
                iron: '2%'
            },
            {
                id: 608,
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                sodium: 562,
                calcium: '0%',
                iron: '45%'
            },
            {
                id: 609,
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                sodium: 326,
                calcium: '2%',
                iron: '22%'
            },
            {
                id: 610,
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                sodium: 54,
                calcium: '12%',
                iron: '6%'
            }
        ];
    }
}