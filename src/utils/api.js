import axios from 'axios'
export function getPodOnlineStatus () {
    // would create a new file that wraps axios to take care of api calls
    // return axios.get('/home');
    
    const mockData = {
        pod: { 
            locations: [
                {
                    name: 'A',
                    pods: [
                        {
                            name: 'Angela',
                            status: true
                        },
                        {
                            name: 'Catherine',
                            status: false
                        },
                        {
                            name: 'Brittany',
                            status: true
                        },
                        {
                            name: 'Daisy',
                            status: true
                        }
                    ]
                },
                {
                    name: 'B',
                    pods: [
                        {
                            name: 'Angela',
                            status: true
                        },
                        {
                            name: 'Catherine',
                            status: false
                        },
                        {
                            name: 'Brittany',
                            status: true
                        },
                        {
                            name: 'Daisy',
                            status: true
                        }
                    ]
                },
                {
                    name: 'C',
                    pods: [
                        {
                            name: 'Angela',
                            status: true
                        },
                        {
                            name: 'Catherine',
                            status: false
                        },
                        {
                            name: 'Brittany',
                            status: true
                        },
                        {
                            name: 'Daisy',
                            status: true
                        }
                    ]
                },
            ]
        },
        stats: { 
            totalDeliveries: {
                week: 38,
                month: 160
            }, 
            totalTimeInPod: {
                week: 748,
                month: 3200
            },
            totalUsers: {
                week: 1552,
                month: 6000
            }
        }
    }

    return mockData;
}