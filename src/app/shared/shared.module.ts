import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReversePipe } from "./pipes/reverse.pipe";
import { MaterialModule } from "./material/material.module";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [ReversePipe],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [MaterialModule, ReversePipe, BrowserAnimationsModule],
  providers: []
})
export class SharedModule {}
