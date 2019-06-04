import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'

import { AboutPopoverComponent } from './about-popover/about-popover.component'
import { AddressRowComponent } from './address-row/address-row.component'
import { CurrentSecretComponent } from './current-secret/current-secret.component'
import { WalletItemComponent } from './wallet-item/wallet-item.component'
import { IdenticonComponent } from './identicon/identicon.component'
import { CurrencySymbolComponent } from './currency-symbol/currency-symbol.component'
import { FormsModule } from '@angular/forms'
import { SecretItemComponent } from './secret-item/secret-item.component'

@NgModule({
  declarations: [
    AboutPopoverComponent,
    AddressRowComponent,
    CurrencySymbolComponent,
    CurrentSecretComponent,
    IdenticonComponent,
    SecretItemComponent,
    WalletItemComponent
  ],
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule],
  exports: [
    AboutPopoverComponent,
    AddressRowComponent,
    CurrencySymbolComponent,
    CurrentSecretComponent,
    IdenticonComponent,
    SecretItemComponent,
    WalletItemComponent
  ],
  entryComponents: [AboutPopoverComponent]
})
export class ComponentsModule {}
