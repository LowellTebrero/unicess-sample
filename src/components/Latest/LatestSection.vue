<template>
    <h1 class="text-center text-xl lg:text-2xl mt-5 mb-10  lg:mt-12 font-semibold tracking-wide text-blue-900 " id="latest">LATEST NEWS</h1>
    <section class="xl:h-[50vh] py-[4svh] my-10 lg:py-0 flex flex-col lg:flex-row items-center justify-between mx-auto w-[90%] gap-4">
        <div class="w-full">
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-72 overflow-hidden rounded-lg md:h-96 w-full">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div
                            class="relative background-image-1 h-full w-full text-white flex flex-col p-5 space-y-4 justify-between pb-[4rem]">
                            <div class="flex justify-between">
                                <span class="text-xs font-extralight">Posted: July 22, 2025</span>
                                <span class="text-xs font-extralight">UNICESS NEWS</span>
                            </div>
                            <div>
                                <h1 class="text-sm lg:text-xl font-medium">University Launches Comprehensive Community
                                    Education Programs</h1>
                                <p class="text-xs md:text-sm text-left font-light">
                                    The University Community Extension Services System has launched a series of
                                    comprehensive educational programs aimed at fostering lifelong learning within the
                                    community. The programs include workshops, seminars, and continuing education
                                    courses that cater to diverse age groups and interests. These initiatives are
                                    designed to empower individuals with new skills and knowledge, contributing to
                                    personal and professional growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div
                            class="relative background-image-2 h-full w-full text-white flex flex-col p-5 space-y-4 justify-between pb-[4rem]">
                            <div class="flex justify-between">
                                <span class="text-xs font-extralight">Posted: July 22, 2025</span>
                                <span class="text-xs font-extralight">UNICESS NEWS</span>
                            </div>
                            <div>
                                <h1 class="text-sm lg:text-xl font-medium">Health and Wellness Fair Promotes Community
                                    Well-being</h1>
                                <p class="text-xs md:text-sm text-left font-light">
                                    The University Community Extension Services System recently held a health and
                                    wellness fair, offering free health screenings, fitness classes, and wellness
                                    workshops to community members. The event aimed to promote healthy living and
                                    provide accessible healthcare services. Medical professionals and wellness experts
                                    were on hand to offer advice and conduct screenings, ensuring comprehensive care for
                                    all attendees.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div
                            class="relative background-image-3 h-full w-full text-white flex flex-col p-5 space-y-4 justify-between pb-[4rem]">
                            <div class="flex justify-between">
                                <span class="text-xs font-extralight">Posted: July 22, 2025</span>
                                <span class="text-xs font-extralight">UNICESS NEWS</span>
                            </div>
                            <div>
                                <h1 class="text-sm lg:text-xl font-medium">University Supports Local Entrepreneurs with New
                                    Business Hub</h1>
                                <p class="text-xs md:text-sm text-left font-light">
                                    The University Community Extension Services System has opened a new business hub to
                                    support local entrepreneurs. The hub provides consulting services, entrepreneurial
                                    training, and business incubation programs. These resources aim to stimulate
                                    economic growth and help local businesses thrive. The initiative underscores the
                                    university's commitment to fostering economic development through collaboration and
                                    support.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div
                            class="relative background-image-4 h-full w-full text-white flex flex-col p-5 space-y-4 justify-between pb-[4rem]">
                            <div class="flex justify-between">
                                <span class="text-xs font-extralight">Posted: July 22, 2025</span>
                                <span class="text-xs font-extralight">UNICESS NEWS</span>
                            </div>
                            <div>
                                <h1 class="text-sm lg:text-xl font-medium">Environmental Sustainability Project Takes Root at
                                    University</h1>
                                <p class="text-xs md:text-sm text-left font-light">
                                    The University Community Extension Services System has initiated an environmental
                                    sustainability project focused on urban gardening and recycling programs. The
                                    project involves community members in creating and maintaining green spaces,
                                    promoting sustainable living practices, and educating the public about environmental
                                    conservation. This initiative reflects the university's dedication to environmental
                                    stewardship and community engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div
                            class="relative background-image-5 h-full w-full text-white flex flex-col p-5 space-y-4 justify-between pb-[4rem]">
                            <div class="flex justify-between">
                                <span class="text-xs font-extralight">Posted: July 22, 2025</span>
                                <span class="text-xs font-extralight">UNICESS NEWS</span>
                            </div>
                            <div>
                                <h1 class="text-sm lg:text-xl font-medium">Cultural Festival Celebrates Diversity and
                                    Community Spirit</h1>
                                <p class="text-xs md:text-sm text-left font-light">
                                    The University Community Extension Services System recently hosted a cultural
                                    festival that celebrated the diversity and rich cultural heritage of the community.
                                    The event featured performances, art exhibits, and recreational activities,
                                    providing a platform for local artists and performers to showcase their talents. The
                                    festival fostered a sense of unity and pride, highlighting the university's role in
                                    enriching community life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slider indicators -->
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                        data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                        data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                        data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                        data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                        data-carousel-slide-to="4"></button>
                </div>           
            </div>
        </div>
        <div class="w-full flex  h-[80%]">
            <CalendarSection />
        </div>

    </section>
</template>

<script setup>
import CalendarSection from './CalendarSection.vue';
</script>


<style scoped>
.background-image-1 {
    background-image: linear-gradient(to top, rgba(32, 84, 253, 0.699), rgba(57, 143, 255, 0.089)), url('/src/assets/img/news-1.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.background-image-2 {
    background-image: linear-gradient(to top, rgba(32, 84, 253, 0.699), rgba(57, 143, 255, 0.089)), url('/src/assets/img/news-2.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.background-image-3 {
    background-image: linear-gradient(to top, rgba(32, 84, 253, 0.699), rgba(57, 143, 255, 0.089)), url('/src/assets/img/news-3.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.background-image-4 {
    background-image: linear-gradient(to top, rgba(32, 84, 253, 0.699), rgba(57, 143, 255, 0.089)), url('/src/assets/img/news-4.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.background-image-5 {
    background-image: linear-gradient(to top, rgba(32, 84, 253, 0.699), rgba(57, 143, 255, 0.089)), url('/src/assets/img/news-5.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>