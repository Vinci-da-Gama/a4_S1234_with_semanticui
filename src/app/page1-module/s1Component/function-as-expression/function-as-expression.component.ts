import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-function-as-expression',
	templateUrl: './function-as-expression.component.html',
	styleUrls: ['./function-as-expression.component.scss']
})
export class FunctionAsExpressionComponent implements OnInit {
	protected SampleStr = 'This is string, which is injected by function.';

	constructor() { }
	ngOnInit() { }

	protected confirmColoful() {
		return true;
	}

	protected description() {
		return this.SampleStr;
	}

}
