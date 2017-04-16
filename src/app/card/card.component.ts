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
	@Input()
	columns: number = 4;
	cards: Card[];

	constructor(private cardService: CardService) { }

	getCards(): void {
		this.cardService.getCards(this.amount).subscribe(result => this.cards = result);
	}

	ngOnInit(): void {
		this.getCards();
	}

}
