import { Component, Input, OnInit } from '@angular/core';

import { Update } from './update';
import { UpdateService } from './update.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [UpdateService]
})
export class UpdateComponent implements OnInit {
	updates: Update[];

	constructor(private updateService: UpdateService) { }

	getUpdates(): void {
		this.updates = this.updateService.getUpdates();
	}

	ngOnInit(): void {
		this.getUpdates();
	}
}
