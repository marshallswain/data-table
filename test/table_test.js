import QUnit from "steal-qunit";
import {BitPanelVM, BitTabsVM} from "data-table";
import can from "can";
import $ from "jquery";
import F from "funcunit";

F.attach(QUnit);

QUnit.module("data-table view model");

QUnit.test("basics", function(){
	var tabsVM = new BitTabsVM();
	var panelVM = new BitPanelVM();
	tabsVM.addPanel(panelVM);

	equal(panelVM.attr("active"), true, "first panel added is active");
});

var template = can.stache("<data-table tabs-class='nav nav-tabs'><bit-panel title='First'>Hello!</bit-panel><bit-panel title='Second'>Another</bit-panel></data-table>");

QUnit.module("data-table component",{
	setup: function(){
		$("#qunit-fixture").append(template());
	}
});

QUnit.test("basics", function(){
  F("data-table ul li").text(/First/, "has text");
  F("data-table ul").hasClass("nav", true).hasClass("nav-tabs", true, "tabsClass gets assigned to ul");
});

QUnit.test("clicking works", function(){
  F("data-table li:nth(1)").click();
  F("bit-panel:nth(1)").text("Another", "Correct text shown");
});
