const BitcoreLibMue = require('bitcore-lib-mue2');
import { AbstractBitcoreLibDeriver } from '../btc';
export class MueDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLibMue;
}
