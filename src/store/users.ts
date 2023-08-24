import {defineStore} from "pinia";
import {ref} from "vue"

export const userDataStore = defineStore('userData', () => {
    // state
    const users = ref([
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            name: 'Ali Connors',
            reviews: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            quantity: 10,
            location: {
                country: 'Russia',
                address: 'Tverskay',
                image: require('/public/img/russia.jpg')
            }
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ4',
            name: 'to Alex, Scott, Jennifer',
            reviews: `Wish I could come, but I'm out of town this weekend.`,
            quantity: 5,
            location: {
                country: 'Нидерланды',
                address: 'Площадь Дам (De Dam) в Амстердаме',
                image: require('/public/img/niderland.webp')
            }
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            name: 'Sandra Adams',
            reviews: 'Do you have Paris recommendations? Have you ever been?',
            quantity: 7,
            location: {
                country: 'Италия',
                address: 'Виа дель Корсо (Via del Corso)',
                image: require('/public/img/italy.jpg')
            }
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            name: 'Trevor Hansen',
            reviews: 'Have any ideas about what we should get Heidi for her birthday?',
            quantity: 17,
            location: {
                country: 'Германия',
                address: 'Брайтештрассе-пешеходная улица',
                image: require('/public/img/germany.jpg')
            }
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            name: 'Britta Holt',
            reviews: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            quantity: 28,
            location: {
                country: 'Франция',
                address: 'Rue Adolphe-Jullien',
                image: require('/public/img/france.jpg')
            }
        },
    ])
    // actions
    const country = ref([
        {
            country: 'Russia',
        },
        {
            country: 'Нидерланды',
        },
        {
            country: 'Германия',
        },
        {
            country: 'Франция',
        },
    ])
    const quantity = ref ([
        {
            quantity: 10
        },
        {
            quantity: 5
        },
        {
            quantity: 7
        },
        {
            quantity: 17
        },
        {
            quantity: 28
        },
    ])


    // getters
    return {users, country,quantity}
},)
