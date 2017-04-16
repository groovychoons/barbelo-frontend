import { Injectable } from '@angular/core';

import { Project } from './project';
import { Http, Response } from '@angular/http';
import { GlobalVariable } from '../_common/global';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProjectViewService {

	constructor(private http: Http) { }

	getProject(id: number): Observable<Project> {
  		return this.http.get(GlobalVariable.BASE_URL + 'api/project/' + id)
  			.map((project: Response) => {
  					return project.json();
  				}
  			);
	}

}