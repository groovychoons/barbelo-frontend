import { Injectable } from '@angular/core';

import { Card } from './card';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { contentHeaders } from '../_common/headers';
import { GlobalVariable } from '../_common/global';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class CardService {

	constructor(private http: Http) { }

	getCards(amount: number): Observable<Card[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('page', '1');
		params.set('page_size', '1');
		params.set('sort', '[{"column":"id","order":"desc"}]');
		params.set('filter', '[{"column":"description","operator":"isnotnull"}]');

		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		return this.http.get(GlobalVariable.BASE_URL + 'api/project', requestOptions)
			.map((response: Response) => {
				return response.json().project;
			});
	}

}
