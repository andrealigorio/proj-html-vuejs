Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
        header: {
            logo: "dark-pet-logo-2x.png",
            telNumber: "1.800.123.4567",
            icons: ["shopping-bag" , "user"],
            links: [
                {
                    name: "Home",
                    chevron: true,
                },
                {
                    name: "Shop",
                    chevron: true,
                },
                {
                    name: "About",
                    chevron: false,
                },
                {
                    name: "blog",
                    chevron: false,
                },
                {
                    name: "Contact",
                    chevron: false,
                },
                {
                    name: "Shop by brand",
                    chevron: true,
                }
            ]
        },
        selected: 0
    },
    methods: {
        chevronLink(link) {
            if(link.chevron) {
                return "fas fa-angle-down";
            }
        }
    }
});