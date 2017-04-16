import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

export	function addToken(): void{
	let token = JSON.parse(localStorage.getItem('currentUser')).token;

	if (contentHeaders.has('Token')){
		contentHeaders.set('Token', token);
	}
	else{
		contentHeaders.append('Token', token);
	}
}
