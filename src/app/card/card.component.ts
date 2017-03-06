import { Component, Input, OnInit } from '@angular/core';

import { Card } from './card';
import { CardService } from './card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {
	@Input()
  	amount: number = 4;
	columns: string = 2;
	cards: Card[];

	constructor(private cardService: CardService) { }

	getCards(): void {
		this.cards = this.cardService.getCards();
	}

	ngOnInit(): void {
		this.getCards();
	}

}
