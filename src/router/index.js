import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () =>
    import('@/containers/DefaultContainer')
const MemberContainer = () =>
    import('@/containers/MemberContainer')

// Views


const Administrator = () =>
    import('@/views/setup/authorization/administrator')

const Workprocess = () =>
    import('@/views/setup/authorization/workprocess')

const WorkprocessAdmin = () =>
    import('@/views/setup/authorization/workprocessAdmin')

const Permissions = () =>
    import('@/views/setup/authorization/permissions')



//const Dashboard = () => import('@/views/Dashboard')
const Country = () =>
    import('@/views/setup/default/country')
const StatusFlag = () =>
    import('@/views/setup/default/statusflag')
const currency = () =>
    import('@/views/setup/default/currency')
const businessstatus = () =>
    import('@/views/setup/default/businessstatus')

const TradeTerm = () =>
    import('@/views/setup/default/tradeterm')


const Role = () =>
    import('@/views/setup/authorization/role')
const Approval = () =>
    import('@/views/setup/authorization/approval')
const roleapprovalstep = () =>
    import('@/views/setup/authorization/roleapprovalstep')

const Paymenttype = () =>
    import('@/views/setup/financial/paymenttype')
const duedatetype = () =>
    import('@/views/setup/financial/duedatetype')

const Packing = () =>
    import('@/views/setup/product/packing')

//const Home = () => import('@/views/home')
const Home = () =>
    import('@/views/home')
const signin = () =>
    import('@/views/member/signin')
const signup = () =>
    import('@/views/member/signup')

// Views
const dashboard = () =>
    import('@/views/dashboard')


const dashboard_shelf = () =>
    import('@/views/dashboard_shelf')


const dashboardLineStore = () =>
    import('@/views/dashboardLineCanvas')

const dashboardLineSale = () =>
    import('@/views/dashboardLine')


const reptsummarysale = () =>
    import('@/views/report/reptsummarysale')




const workloadstock = () =>
    import('@/views/report/workloadstock')



const waitcreatebill = () =>
    import('@/views/report/waitcreatebill')
const workreqpaystock = () =>
    import('@/views/report/workreqpaystock')






Vue.use(Router)

export default new Router({
    mode: 'history',

    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: '',
        component: DefaultContainer,
        children: [{
            path: '/',
            name: 'Home', //'home',
            component: Home ////-->def compunent ้นทำ
        },
        {
            path: 'dashboardLine',
            name: 'DashboardLine',
            component: dashboardLineStore
        },
        {
            path: 'dashboardLineSale',
            name: 'dashboardLineSale',
            component: dashboardLineSale
        },

        {
            path: 'dashboard',
            name: 'Dashboard',
            component: dashboard
        },

        {
            path: 'dashboard_shelf',
            name: 'Dashboard_shelf',
            component: dashboard_shelf
        },


        {
            path: 'sales',
            redirect: '/sales/quotation',
            name: 'sales',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: 'quotation',
                name: 'quotation',
                component: Home
            }]
        }
        ]
    },

    {
        path: '/report',
        name: 'Report Daily',
        component: DefaultContainer,
        children: [


            {
                path: '/report/reptsummarysale',
                name: 'ยอดขายประจำวัน',
                component: reptsummarysale
            }
        ]
    },
    {
        path: '/report',
        name: 'Report Analysis',
        component: DefaultContainer,
        children: [


            {
                path: '/report/workloadstock',
                name: 'สถิติการจัดเบิกสินค้า',
                component: workloadstock
            }
        ]
    },
    {
        path: '/report',
        name: 'Report Analysis',
        component: DefaultContainer,
        children: [


            {
                path: '/report/waitcreatebill',
                name: 'ระยะเวลารอเปิดบิล',
                component: waitcreatebill
            }
        ]
    },
    {
        path: '/report',
        name: 'ลูกหนี้',
        component: DefaultContainer,
        children: [

            {
                path: '/report/workreqpaystock',
                name: 'สถิติการขอเบิกสินค้า',
                component: workreqpaystock
            }
        ]

    }

        ,
    {
        path: '/user',
        name: 'user',
        component: DefaultContainer,
        children: [{
            path: '/user',
            name: '',
            component: Home
        }]
    },


    {
        path: '/setup',
        name: 'setup',
        component: DefaultContainer,
        children: [{
            path: '/setup/default',
            /**        default  */
            name: 'default',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '/setup/default/country',
                name: 'country',
                component: Country
            },
            {
                path: '/setup/default/tradeterm',
                name: 'tradeterm',
                component: TradeTerm
            },

            {
                path: '/setup/default/statusflag',
                name: 'statusflag',
                component: StatusFlag
            },
            {
                path: '/setup/default/currency',
                name: 'currency',
                component: currency
            },
            {
                path: '/setup/default/businessstatus',
                name: 'businessstatus',
                component: businessstatus
            },

            ]
        },

        {
            path: '/setup/authorization/administrator',
            /**        authorization  */
            name: 'authorization',
            component: {
                render (c) { return c('router-view') }
            },
            children: [
                {
                    path: '/setup/authorization/permissions',
                    name: 'permissions',
                    component: Permissions

                },
                {
                    path: '/setup/authorization/administrator',
                    name: 'administrator',
                    component: Administrator
                },
                {
                    path: '/setup/authorization/workprocess',
                    name: 'workprocess',
                    component: Workprocess
                },
                {
                    path: '/setup/authorization/workprocessAdmin',
                    name: 'workprocessAdmin',
                    component: WorkprocessAdmin
                },
            ]
        },

        {
            path: '/setup/product',
            /**        Product  */
            name: 'product',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '/setup/product/packing',
                name: 'packing',
                component: Packing
            },]
        },

        {
            path: '/setup/financial/paymenttype',
            name: 'financial',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '/setup/financial/paymenttype',
                name: 'paymenttype',
                component: Paymenttype /** จากการกำหนดข้างบนเด้อจ้า */
            },
            {
                path: '/setup/financial/duedatetype',
                name: 'duedatetype',
                component: duedatetype /** BEE EDIT 5.10.19 */
            },
            ]
        }



        ]
    },

    {
        path: '/member',
        redirect: '/member/signin',
        name: 'member',
        component: MemberContainer,
        children: [{
            path: 'signin',
            name: 'signin',
            component: signin
        },
        {
            path: 'signup',
            name: 'signup',
            component: signup
        },
        {
            path: 'resetpassword',
            name: 'resetpassword',
            component: {}
        }
        ]
    },






    ]
})