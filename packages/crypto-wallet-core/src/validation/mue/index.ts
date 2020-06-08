import { IValidation } from '..';
const BitcoreMue = require('bitcore-lib-mue2');

export class MueValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const AddressMue = BitcoreMue.Address;
    // Regular Address: try Bitcoin MUE
    return AddressMue.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URIMue = BitcoreMue.URI;
    // Bip21 uri
    return URIMue.isValid(addressUri);
  }
}
