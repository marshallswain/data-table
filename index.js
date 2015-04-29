import 'can';
import template from 'index.stache!';
import {Customer} from 'test/models/customer';

can.$('body').append(can.view(template, {CustModel:Customer}));