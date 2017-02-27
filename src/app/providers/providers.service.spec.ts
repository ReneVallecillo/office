import { TestBed, async, inject } from '@angular/core/testing';
import { ProviderService } from './providers.service';
import { Provider } from '../models/provider';

describe('Service: ProviderService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProviderService]
        });
    });

    const providers: Provider[] = [
        {
            id: 1,
            name: 'Provider 1',
            tradename: 'Pollo Loco',
            ident: 'J0310000012345',
            contactName: 'Test Contact Name',
            phones: '1-800-test',
            email: 'test@email.com',
            address: 'Ipsum aliquip voluptate et voluptate aliqua.'
        },
        {
            id: 3,
            name: 'Provider 3',
            tradename: '',
            ident: 'J0310000054321',
            contactName: 'Test Contact Name',
            phones: '1-800-test',
            email: 'test2@email.com',
            address: 'Ipsum aliquip voluptate et voluptate aliqua.'
        }
    ];
    it('should ...', inject([ProviderService], (service: ProviderService) => {
        expect(service).toBeTruthy();
    }));
});