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
                    dropDown: true,
                },
                {
                    name: "Shop",
                    dropDown: true,
                },
                {
                    name: "About",
                    dropDown: false,
                },
                {
                    name: "Blog",
                    dropDown: false,
                },
                {
                    name: "Contact",
                    dropDown: false,
                },
                {
                    name: "Shop by brand",
                    dropDown: true,
                }
            ]
        },
        categoryCards: [
            {
                name: "Bed",
                img: "product-9.jpg",
                numberProducts: 1
            },
            {
                name: "Food",
                img: "product-2.jpg",
                numberProducts: 6
            },
            {
                name: "Toys",
                img: "product-3.jpg",
                numberProducts: 6
            },
            {
                name: "Transport",
                img: "product-4.jpg",
                numberProducts: 7
            }
        ],
        foodCards: [
            {
                name: "Kibble",
                description: "Dry dog food",
                img: "food-transparent-18.png",
                buttonText: "Shop dry food"
            },
            {
                name: "Moist",
                description: "Canned dog food",
                img: "food-transparent-17.png",
                buttonText: "shop moist food"
            },
            {
                name: "Frozen",
                description: "Freeze-Dried dog food",
                img: "food-transparent-16.png",
                buttonText: "shop frozen food"
            }
        ],
        itemsCards: [
            {
                img: "product-21.jpg",
                description: "Transport cage",
                price: 25.00,
            },
            {
                img: "product-20.jpg",
                description: "Dog leash",
                price: 25.00,
            },
            {
                img: "product-5.jpg",
                description: "Animal transport cage",
                price: 25.00,
                discount: 35.00
            },
            {
                img: "product-11.jpg",
                description: "Colorful cat leash",
                price: 12.00,
            }
        ],
        testimonialsUsers: [
            {
                img: "avatar-3.jpg",
                description: "Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu.Eu.",
                userName: "Lisa Smith, ThemeFusion"
            },
            {
                img: "avatar-1.jpg",
                description: "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.",
                userName: "Melissa Green, ThemeFusion"
            },
            {
                img: "avatar-4.jpg",
                description: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.",
                userName: "Sam Lewis, ThemeFusion"
            }
        ],
        blogItems: [
            {
                img: "blog-1.jpg",
                description: "How to ‘loose leash walk’ your dog",
                date: "April 21st, 2020"
            },
            {
                img: "blog-2.jpg",
                description: "Stop cats from scratching furniture",
                date: "April 19st, 2020"
            },
            {
                img: "blog-3.jpg",
                description: "Where to buy the best pet food",
                date: "April 18st, 2020"
            },
            {
                img: "blog-4.jpg",
                description: "Proper care for your pet toys",
                date: "April 17st, 2020"
            }
        ],
        newProducts: [
            {
                img: "product-8.jpg",
                description: "Colored pet bed",
                price: 25.00
            },
            {
                img: "product-2.jpg",
                description: "Colorful ball set",
                price: 29.00
            },
            {
                img: "product-3.jpg",
                description: "Dog bone",
                price: 18.00,
                discount: 35.00
            },
            {
                img: "product-4.jpg",
                description: "Animal transport bag",
                price: 29.00
            },
            {
                img: "product-5.jpg",
                description: "Animal transport cage",
                price: 35.00
            },
            {
                img: "product-10.jpg",
                description: "Closable cat litter",
                price: 16.00
            }
        ],
        footer: {
            logo: "mobile-light-pet-logo-2x.png",
            address: "1234 Avada Avenue Avadaville",
            email: "info@your-company.com",
            telNumber: "(1) 234 5678",
            brandLinks: ["Bed", "Food", "Toys", "Transport"],
            usefulLinks: ["My account", "Orders", "Checkout", "Cart"],
            navLinks: ["Home", "About", "Blog", "Contact", "Shop"],
            socialIcons: ["facebook-f", "twitter", "instagram", "youtube"]
        },
        selected: "Home",
    },
    methods: {
        chevronLink(link) {
            if(link.dropDown) {
                return "fas fa-angle-down";
            }
        },
        isDiscount(item) {
            if(item.discount) {
                return true;
            }
            return false;
        }
    }
});