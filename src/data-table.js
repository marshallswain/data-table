import can from "can";
import dataTableStache from "./data-table.stache!";
import "./data-table.less!";
import {customers} from "test/data/customers";

console.log(customers);

export var DataTableVM = can.Map.extend({
	active: false,
	customers: customers
});

can.Component.extend({
	tag:"data-table",
	template: dataTableStache,
	scope: DataTableVM,
	events: {}
});