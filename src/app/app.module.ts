import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import * as Hammer from 'hammerjs';

import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './routing/app-router.module';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { TrainingComponent } from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import {TranslateService} from './translate/service/translate.service';
import { TranslatePipe } from './translate/pipe/translate.pipe';
import {MaterialModule} from './material/material.module';


export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y'
    });

    return mc;
  }
}

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    CareerComponent,
    TrainingComponent,
    ContactComponent,
    TranslatePipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    TranslateService, {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
