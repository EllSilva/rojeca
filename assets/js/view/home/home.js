import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            title: "home"
        }

    },

    methods: {

    },

    async created() {

    },


    async mounted() {

        AOS.init({
            duration: 1000,
        });



        const swiper = new Swiper(".mySlider", {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true
            }
        });

        document.querySelector(".prev").onclick = () => swiper.slidePrev();
        document.querySelector(".next").onclick = () => swiper.slideNext();


    },
    template: await get_template('./assets/js/view/home/home')
}