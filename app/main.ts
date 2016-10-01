// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from 'nativescript-angular/platform';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat.component';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
    declarations: [AppComponent, ChatComponent, TimeAgoPipe],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
