import {ClientsComponent} from "./clients.component"
import {ClientDetailComponent} from "./client-detail.component"

export const clientsRouterConfig = [
    {
        path: 'clients',
        children: [
            {
                path: '',
                component: ClientsComponent
            },
            {
                path: ":id",
                component: ClientDetailComponent
            }
        ]
    }
]