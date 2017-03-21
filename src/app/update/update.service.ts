import { Injectable } from '@angular/core';

import { Update } from './update';
import { MOCK_UPDATE_DATA } from '../MOCK_UPDATE_DATA';

@Injectable()
export class UpdateService {
	getUpdates(): Update[] {
        return MOCK_UPDATE_DATA;
    }
    
  constructor() { }

}
