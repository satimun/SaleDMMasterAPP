export default {
    items: [{
            name: 'Home',
            url: '/',
            icon: 'icon-screen-desktop',
            badge: {
                variant: 'primary'
            }
        },

        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-chart',
            badge: {
                variant: 'secondary'

            }
        },


        {
            name: 'Dashboard_shelf',
            url: '/dashboard_shelf',
            icon: 'icon-chart',
            badge: {
                variant: 'secondary'

            }
        },



        // {
        //     name: 'Report Daily',
        //     url: '/report',
        //     icon: 'icon-grid',
        //     children: [


        //         {
        //             name: 'ยอดขายประจำวัน',
        //             url: '/report',

        //             url: '/report/reptsummarysale'
        //         }



        //     ]
        // },



        {
            name: 'Report Analysis',
            url: '/report',
            icon: 'icon-globe',
            children: [


                {
                    name: 'สถิติการจัดเบิกสินค้า',
                    url: '/report',

                    url: '/report/workloadstock'

                },

                {
                    name: 'ระยะเวลารอเปิดบิล',

                    url: '/report/waitcreatebill'



                }

                ,

                {
                    name: 'สถิติการขอเบิกสินค้า',

                    url: '/report/workreqpaystock'



                }


            ]
        }
        // , 
        //     {
        //       name: 'Disabled',
        //       url: '/dashboard',
        //       icon: 'icon-ban',
        //       badge: {
        //         variant: 'secondary',
        //         text: 'NEW'
        //       },
        //       attributes: { disabled: true },
        //     }



    ]
}