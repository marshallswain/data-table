import can from 'can';
import 'can/map/define/';
import 'can/list/sort/';
import dataTableStache from './data-table.stache!';
import './data-table.less!';
import 'test/fixtures/customers';


export var DataTableVM = can.Map.extend({
	active: false,
	// Pass in a model to retrieve records from a server.
	dtModel:false,
	items:null
});

can.Component.extend({
	tag:'data-table',
	template: dataTableStache,
	viewModel: DataTableVM,
	events: {
		'init':function(){
			if (this.viewModel.attr('model')) {
				var test = this.viewModel.attr('model').findAll({});
				this.viewModel.attr('items', test);
			}
		}
	}
});