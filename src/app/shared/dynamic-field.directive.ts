import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnInit,
    ViewContainerRef } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FieldConfig } from './form/field.interface';
import { InputComponent } from './form/input/input.component';
import { ButtonComponent } from './form/button/button.component';
import { SelectComponent } from './form/select/select.component';
import { DateComponent } from './form/date/date.component';
import { RadiobuttonComponent } from './form/radiobutton/radiobutton.component';
import { CheckboxComponent } from './form/checkbox/checkbox.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {

    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
      );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
