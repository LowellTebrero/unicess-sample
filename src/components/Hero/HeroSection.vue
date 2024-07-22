<template>
    <section class="lg:h-[70vh] background-image py-[10svh]" id="home">
        <div class="flex flex-col lg:flex-row items-center justify-between mx-auto w-[90%] h-full">
            <div class="flex-1 flex items-center justify-center mb-[4svh] lg:mb-0">
                <img src="/src/assets/img/logo.png" alt="unicess-logo" class="w-[10rem] lg:w-[10rem] xl:w-[15rem] drop-shadow-lg">
            </div>
            <div class="flex-1">
                <h1 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-medium text-yellow-400 drop-shadow-lg text-center lg:text-left">University Community Extension Services
                    System</h1>
                <p class="text-white md:font-medium tracking-wide drop-shadow-lg mt-3 text-xs sm:text-sm xl:text-lg font-light text-shadow text-center lg:text-left">
                    The University Community Extension Services System is a dynamic initiative designed to bridge the
                    gap between academic institutions and the wider community. By leveraging the expertise and resources
                    of the university, this system aims to provide a wide array of services that enhance the quality of
                    life, promote lifelong learning, and foster sustainable development within the community.
                </p>
                <div class="flex w-full justify-center lg:justify-start  mt-4">
                    <button class="bg-yellow-500 text-white px-3 py-1  drop-shadow-lg font-medium tracking-wide text-sm md:text-md rounded h-full">Show more</button>
                </div>
            </div>
        </div>

    </section>
    <div class="w-full h-5 bg-yellow-500"></div>
    <div class="w-full h-5 bg-blue-600"></div>
    <SubHeroSection />
</template>

<script setup>
import SubHeroSection from './SubHeroSection.vue';


</script>

<style scoped>
.background-image {
    background-image: linear-gradient(to top left, rgba(47, 96, 255, 0.699), rgba(57, 143, 255, 0.171)), url('/src/assets/img/bg-3.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
}
</style>