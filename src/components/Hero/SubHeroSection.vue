<template>
    <section class="w-[90%] mx-auto xl:h-[30vh] mt-[5svh] flex flex-col lg:flex-row gap-y-4 py-[10svh] lg:py-0 items-center justify-center lg:gap-x-[4rem]">
        <div
            class="flex-1 py-4 h-[70%] w-full bg-about-1 rounded-lg flex flex-col items-center justify-center px-3 text-center text-white">
            <h1 class="text-2xl xl:text-4xl 2xl:text-5xl font-semibold  tracking-wide text-yellow-400 drop-shadow-lg">
                INTEGRITY
            </h1>
            <p class="tracking-wide drop-shadow-lg font-light md:font-normal text-xs md:text-sm xl:text-md">Enhancing community life through education, health, economic
                development, and sustainability initiatives.
            </p>
        </div>
        <div
            class="flex-1 py-4 h-[70%] w-full bg-about-2 rounded-lg flex flex-col items-center justify-center px-3 text-center text-white">
            <h1 class="text-2xl xl:text-4xl 2xl:text-5xl font-semibold  tracking-wide text-yellow-400 drop-shadow-lg">
                EXCELLENCE
            </h1>
            <p class="tracking-wide drop-shadow-lg font-light md:font-normal text-xs md:text-sm xl:text-md">Excellence, and collaboration enhance education, health, economic
                growth, and sustainability for all.
            </p>
        </div>
        <div
            class="flex-1 py-4 h-[70%] w-full bg-about-3 rounded-lg flex flex-col items-center justify-center px-3 text-center text-white">
            <h1 class="text-2xl xl:text-4xl 2xl:text-5xl font-semibold  tracking-wide text-yellow-400 drop-shadow-lg">
                HONESTY
            </h1>
            <p class="tracking-wide drop-shadow-lg font-light md:font-normal text-xs md:text-sm xl:text-md">Enhancing education, health, and sustainability with honesty,
                transparency, and community collaboration.
            </p>
        </div>



    </section>
</template>

<script setup>

</script>

<style scoped>
.bg-about-1 {
    background-image: linear-gradient(to top left, rgba(94, 131, 255, 0.699), rgba(57, 143, 255, 0.171)), url('/src/assets/img/integrity.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

}

.bg-about-2 {
    background-image: linear-gradient(to top left, rgba(94, 131, 255, 0.699), rgba(57, 143, 255, 0.171)), url('/src/assets/img/excellence.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.bg-about-3 {
    background-image: linear-gradient(to top left, rgba(94, 131, 255, 0.699), rgba(57, 143, 255, 0.171)), url('/src/assets/img/honesty.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>