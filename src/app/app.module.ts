﻿import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {appRoutingModule} from './app.routing';

import {ErrorInterceptor} from './_helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {WebsocketService} from '@app/_services/websocket.service';
import {AuthenticationInterceptor} from '@app/_helpers/authentication.interceptor';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatLineModule, MatOptionModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ExampleFormComponent} from '@app/example-form/example-form.component';
import {MatSliderModule} from '@angular/material/slider';
import {InvitationListComponent} from './invitation-list/invitation-list.component';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {MatDialogModule} from '@angular/material/dialog';
import { SurveyDialogComponent } from './survey-dialog/survey-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSliderModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FormsModule,
    MatLineModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    FlexLayoutModule,
    PickerModule,
    MatDialogModule,
    MatTooltipModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ExampleFormComponent,
    InvitationListComponent
,
    SurveyDialogComponent  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    WebsocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
