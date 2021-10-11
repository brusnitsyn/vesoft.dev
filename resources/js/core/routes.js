const Home = () => import('./components/Home')
const Auth = () => import('./components/Home')
const Welcome = () => import('./components/WelcomeView')
const Apps = () => import('./components/apps/AppsView')
const AppsDetail = () => import('./components/apps/AppsDetailView')

export const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/',
                component: Welcome
            },
            {
                path: 'apps',
                component: Apps
            },
            {
                path: 'apps/:id',
                component: AppsDetail,
                props: true
            }
        ]
    },
    {
        path: '/auth',
        component: Auth
    }
]