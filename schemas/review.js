export default {
    name: 'review',
    title: 'Review',
    type: 'object',
    fields: [
        {
            name: 'reviewDesc',
            title: 'Review Description',
            type: 'string'
        }, 
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'traveller'
        }, 
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [ 
                    { title: '5 Stars', value: 'five-stars' }, 
                    { title: '4 Stars', value: 'four-stars' }, 
                    { title: '3 Stars', value: 'three-stars' }, 
                    { title: '2 Stars', value: 'two-stars' }, 
                    { title: '1 Stars', value: 'one-stars' }, 
                ],
                layout: 'radio'
            }
        }
    ]
}