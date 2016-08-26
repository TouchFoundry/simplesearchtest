/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { WelcomeCardComponent } from './welcome-card.component';

describe('Component: WelcomeCard', () => {
  it('should create an instance', () => {
    let component = new WelcomeCardComponent();
    expect(component).toBeTruthy();
  });
});
