// var dataProduct = {
//     maximum: 75000,
//     products: [
//         {
//             "id": "429",
//             "name": "Bamboo Thermal Ski Coat",
//             "description": "You'll be the most evironmentally consiius skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organix bamboo",
//             "price": "80000",
//             "image_title": "thermal",
//             "image": "https://i0.wp.com/www.iedunote.com/img/23559/what-is-a-company-1.jpg",
//         },
//         {
//             "id": "430",
//             "name": "MU Home 2022",
//             "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//             "price": "89000",
//             "image_title": "baju_emyu",
//             "image": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/91/MTA-100297420/adidas_jersey_original_manchester_united_home_2022-23_full01_2ea6d86e.jpg",
//         },
//         {
//             "id": "431",
//             "name": "MU Away 2022",
//             "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//             "price": "120000",
//             "image_title": "baju_emyu_away_2022",
//             "image": "https://img.ws.mms.shopee.co.id/sg-11134201-22100-a81lzmeax8iv92",
//         },
//         {
//             "id": "432",
//             "name": "MU Away 2021",
//             "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//             "price": "50000",
//             "image_title": "baju_emyu_away_2021",
//             "image": "https://down-id.img.susercontent.com/file/e5021f7a6a34bd58aeff17ec991ce8b5",
//         },
//         {
//             "id": "433",
//             "name": "MU Away 2023",
//             "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//             "price": "55000",
//             "image_title": "baju_emyu_away_2023",
//             "image": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/8/c403981b-dd6b-4574-8a28-25e1d111b6c5.jpg",
//         },
//         {
//             "id": "434",
//             "name": "MU Away 2024",
//             "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//             "price": "150000",
//             "image_title": "baju_emyu_away_2024",
//             "image": "https://img.ws.mms.shopee.co.id/id-11134207-7r98q-lwghj06krve429",
//         }
//     ]
// }


Vue.component('price', {
    data: function(){
        return{
        }
    },
    props: ['value', 'prefix', 'precision'],
    template: '<span>{{this.prefix + Number.parseFloat(this.value).toFixed(this.precision)}}</span>'
});

var app = new Vue({
    el: "#app",
    data: {
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 60,
            sliderStatus: false
        }
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
    },
    filters: {
        currencyFormat: function(value){
            return 'Rp' + Number.parseFloat(value).toFixed(2);
        }
    },
    methods:{
        before: function(el){
            el.className = 'd-none';
        },
        enter: function(el){
            var delay = el.dataset.index * 100;
            setTimeout(function(){
                el.className = 'row d-flex mb-3 align-items-center animatef fadeInRight';
            }, delay)
        },
        leave: function(el){
            var delay = el.dataset.index * 100;
            setTimeout(function(){
                el.className = 'row d-flex mb-3 align-items-center animatef fadeOutRight';
            }, delay)
        },
        addItem: function(product){
            // this.cart.push(product);
            var productIndex;
            var productExist = this.cart.filter(function(item, index){
                if(item.product.id == Number(product.id)){
                    productIndex = index;
                    return true;
                }else{
                    return false;
                }
            });
            console.log(productExist);
            if(productExist.length){
                this.cart[productIndex].qty++;
            }else{
                this.cart.push({product: product, qty: 1});
            }

        },
        deleteItem: function(key){
            console.log(this.cart[key]);
            if(this.cart[key].qty > 1){
                this.cart[key].qty--;
            }else{
                this.cart.splice(key,1);
            }
        }
    },
    computed:{
        sliderState: function(){
            return this.style.sliderStatus ? 'd-flex' : 'd-none'
        },
        cartTotal: function(){
            let sum = 0;
            for(key in this.cart){
                sum = sum + (this.cart[key].product.price * this.cart[key].qty);
            }
            return sum;
        },
        cartQty: function(){
            let qty = 0;
            for(key in this.cart){
                qty = qty + this.cart[key].qty;
            }
            return qty;
        }
    }
});


