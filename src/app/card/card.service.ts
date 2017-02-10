import { Injectable } from '@angular/core';

import { Card } from './card';
import { MOCK_PROJECT_DATA } from '../MOCK_PROJECT_DATA';

@Injectable()
export class CardService {
	getCards(): Card[] {
        return MOCK_PROJECT_DATA;
    }

  constructor() { }

}
