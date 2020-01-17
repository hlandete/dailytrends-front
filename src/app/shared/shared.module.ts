import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReversePipe } from "./pipes/reverse.pipe";
import { MaterialModule } from "./material/material.module";
import { ToastrModule } from "ngx-toastr";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [ReversePipe],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MaterialModule,
    ReversePipe,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: []
})
export class SharedModule {}
