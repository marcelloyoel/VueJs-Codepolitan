<template>
    <transition name="custom"  enter-active-class="animated fadeInDown" leave-active-class="animated slideOutRight">
        <div v-if="sliderStatus" class="">
            <div class="align-item-center" :class="sliderState">
                <label for="" class="font-weight-bold mr-2">Max</label>
                <input type="number" class="form-controler mx-2" style="width: 60px; text-align: center;" v-model="maxAmount" @change="$emit('update:maximum', maxAmount)">
                <input type="range" name="" id="" min="0" max="350" class="custom-range" v-model="maxAmount" @change="$emit('update:maximum', maxAmount)">
            </div>
        </div>
    </transition>
</template>

<script>
    export default{
        name: "price-slider",
        props: ["sliderStatus", "maximum"],
        data: function (){
            return {
                maxAmount: 50
            }
        },
        computed: {
            sliderState: function(){
                return this.sliderStatus ? 'd-flex' : 'd-none'
            },
        }
    }
</script>

<style>
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active{
        transition: all 1s ease-in-out;
    }
</style>