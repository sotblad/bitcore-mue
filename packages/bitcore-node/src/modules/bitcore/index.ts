import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from '..';
import { MUEStateProvider } from '../../providers/chain-state/mue/mue';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class MUEModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('MUE', 'bitcore-lib-mue2', 'bitcore-p2p-mue');
    services.P2P.register('MUE', BitcoinP2PWorker);
    services.CSP.registerService('MUE', new MUEStateProvider());
    services.Verification.register('MUE', VerificationPeer);
  }
}
