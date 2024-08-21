/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "oj-c/input-text";
import "oj-c/input-number";
import "ojs/ojknockout";
import 'oj-c/input-password';
import 'ojs/ojdatetimepicker';
import 'oj-c/checkbox';
import 'oj-c/select-single';
import "oj-c/radioset";
import 'ojs/ojslider';
import "oj-c/button"; 
import 'ojs/ojselectsingle';
import 'ojs/ojoption';

class DashboardViewModel {
  username: ko.Observable<string>;
  phone: ko.Observable<number>;
  laptopOptions: Array<{ value: string; label: string }>;
  checkboxValue: ko.Observable<boolean>;
  selectedCity = ko.observable<string>();
  
  constructor(){
    this.username= ko.observable("");
    this.phone= ko.observable(6);
    this.laptopOptions = [
      { value: "bangalore", label: "Bangalore" },
      { value: "pune", label: "Pune" },
      { value: "mumbai", label: "Mumbai" },
    ];
    this.checkboxValue = ko.observable(false);

    this.selectedCity.subscribe((newValue) => {
      console.log('Selected city:', newValue);
  });

  }
  public buttonClick = (event : Event) =>{
    alert("Hello World");
    return true;
  }
}

export = DashboardViewModel;
