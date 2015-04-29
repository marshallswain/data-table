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
	// By default, headings are separated by commas. Set this
	// to another string to separate with something else.
	headingSeparator:',',
	// By default, fields are separated by commas. Set this
	// to another string to separate with something else.
	fieldSeparator:' ',
	// By default, fields are separated by commas. Set this
	// to another string to separate with something else.
	fieldColumnSeparator:',',
	items:null,
	define:{
		headings:{
			// Split headings using the headingSeparator attribute.
			set(headingString){
				return headingString.split(this.attr('headingSeparator'));
			}
		},
		fields:{
			// Split fields into columns with the fieldColumnSeparator
			// then separate fields using the fieldsSeparator.
			// TODO: Optimize this to loop only once.
			set(fieldString){
				var columns = fieldString.split(this.attr('fieldColumnSeparator'));
				for (var i = 0; i < columns.length; i++) {
					columns[i] = columns[i].trim().split(this.attr('fieldSeparator'));
				}
				return columns;
			}
		}
	}
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
			console.log(this.viewModel.attr('fields'));
		}
	},
	helpers:{
		buildFields(fields){
			var allFields;
			function index(obj,i) {return obj[i];}
			for (var i = 0; i < fields.length; i++) {
				console.log(this);
				allFields += fields[i].split('.').reduce(index, this) + ' ';
			}
			return allFields;
		}
	}
});