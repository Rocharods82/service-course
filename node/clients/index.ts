import { IOClients } from '@vtex/api'
// @ts-ignore
import Analytics from '../clients/analytics'


// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get analytics() {
        return this.getOrSet('analytics', Analytics)
    }

}
