import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [RouterLink]
})
export class HeaderComponent {
    title = 'Gestion des Voyages';
}
