<template>
    <h1 class="text-2xl font-semibold tracking-wide text-blue-900 mt-[5svh] lg:mt-[10vh] mb-10 text-center" id="article">ARTICLE SECTION</h1>

    <section class="flex items-center justify-center h-[70vh] w-[80%] xl:w-[70%] mx-auto text-blue-900">
        
        <div class="hidden lg:block w-full">        
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-full overflow-hidden rounded-lg md:h-96 w-full">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex lg:space-x-5 xl:space-x-10 justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">                         
                                <div class="lg:h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/1-download.jpeg" alt="">
                                </div>
                                
                                <div class="lg:h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 1</span>                            
                                    </div>
                                    <h1 class="text-sm font-medium">Overview of the University Community Extension Services
                                        System</h1>
                                    <p class="text-xs text-justify">The University Community Extension Services System
                                        (UCESS) is a comprehensive initiative that bridges the gap between the academic
                                        world and the local community.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="lg:h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/2-download.jpeg" alt="">
                                </div>
                                <div class="lg:h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 2</span>                            
                                    </div>
                                    <h1 class="text-sm font-medium">Educational Outreach Programs</h1>
                                    <p class="text-xs text-justify">UCES offers diverse educational outreach programs,
                                        including workshops, seminars, and continuing education courses. These programs
                                        cater to community members of all ages,and academic enrichment, thus fostering a
                                        culture of lifelong learning.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="lg:h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/3-download.jpeg" alt="">
                                </div>
                                <div class="lg:h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                            <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                            <span class="text-[.7rem] font-light">Article 3</span>                            
                                        </div>
                                    <h1 class="text-sm font-medium"> Health and Wellness Initiatives</h1>
                                    <p class="text-xs text-justify">Health and wellness are central to UCESS’s mission. The
                                        system conducts health screenings, wellness workshops, and fitness classes, promoting
                                        healthy living among community members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/4-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 4</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Economic Development Support</h1>
                                    <p class="text-xs text-justify">
                                        UCES plays a vital role in local economic development by offering consulting services,
                                        entrepreneurial training, and business incubation programs. These initiatives support local
                                        businesses, enhance employment opportunities within the
                                        community.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/5-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 5</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Environmental Sustainability Projects</h1>
                                    <p class="text-xs text-justify">
                                        Environmental sustainability is a key focus of UCESS. The system implements community-based
                                        projects like urban gardening, recycling programs, and conservation initiatives. Educational
                                        programs on stewardship.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/6-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 6</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Cultural and Recreational Activities</h1>
                                    <p class="text-xs text-justify">
                                        To enrich community life, UCESS organizes cultural events, art exhibits, and recreational
                                        activities. These programs celebrate diversity and provide access to university facilities,
                                        such as libraries, a vibrant cultural
                                        scene.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/7-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 7</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Research and Community Collaboration</h1>
                                    <p class="text-xs text-justify">
                                        UCES encourages community participation in research projects that address local challenges
                                        and contribute to societal advancement. Collaborative projects between university
                                        researchers and community members drive innovation for real-world problems.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/8-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 8</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Youth Mentorship Programs</h1>
                                    <p class="text-xs text-justify">
                                        UCES offers youth mentorship programs, pairing university students and faculty with local
                                        young people. These programs provide guidance, support, and inspiration, helping youth
                                        achieve their academic and personal goals while fostering positive relationships.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/9-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 9</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Adult Learning Opportunities</h1>
                                    <p class="text-xs text-justify">
                                        Adult learners benefit from UCESS’s wide range of continuing education courses and
                                        professional development workshops. These opportunities enable adults to acquire new skills,
                                        advance their careers, and engage in lifelong learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/10-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 10</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Community Health Clinics</h1>
                                    <p class="text-xs text-justify">
                                        UCES partners with local healthcare providers to establish community health clinics. These
                                        clinics offer accessible medical services, health education, and preventative care,
                                        addressing the health needs of underserved populations.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/11-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 11</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Entrepreneurial Training Programs</h1>
                                    <p class="text-xs text-justify">
                                        To support aspiring entrepreneurs, UCESS offers specialized training programs. These
                                        programs cover business planning, financial management, marketing strategies, and more,
                                        equipping participants with the skills needed to succeed in their ventures.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/12-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 12</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Urban Gardening Initiatives</h1>
                                    <p class="text-xs text-justify">
                                        Urban gardening projects under UCESS promote sustainable living and community engagement.
                                        These projects provide fresh produce to local residents, create green spaces, and offer
                                        educational and environmental conservation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/13-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 13</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Arts and Culture Celebrations</h1>
                                    <p class="text-xs text-justify">
                                        UCES organizes various arts and culture celebrations, including festivals, performances, and
                                        exhibits. These events highlight the community's diverse cultural heritage and provide
                                        platforms for local artists to showcase their talents.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/14-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 14</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Sports and Fitness Programs</h1>
                                    <p class="text-xs text-justify">
                                        UCES offers sports and fitness programs that encourage physical activity and healthy
                                        lifestyles. Community members can participate in organized sports leagues, fitness classes,
                                        and wellness challenges, promoting overall well-being.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/15-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 15</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Volunteer Opportunities</h1>
                                    <p class="text-xs text-justify">
                                        Volunteerism is a cornerstone of UCESS. The system provides numerous volunteer opportunities
                                        for university students, faculty, and community members to engage in meaningful service
                                        projects, fostering a sense of community and shared responsibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <button type="button"
                        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm/30 dark:bg-gray-800/30 group-hover:bg-white shadow-sm/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm/30 dark:bg-gray-800/30 group-hover:bg-white shadow-sm/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
            </div>
        </div>

        <div class="hidden md:block lg:hidden w-full">
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-full overflow-hidden rounded-lg md:h-96 w-full">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">                         
                                <div class="lg:h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/1-download.jpeg" alt="">
                                </div>
                                
                                <div class="lg:h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 1</span>                            
                                    </div>
                                    <h1 class="text-sm font-medium">Overview of the University Community Extension Services
                                        System</h1>
                                    <p class="text-xs text-justify">The University Community Extension Services System
                                        (UCESS) is a comprehensive initiative that bridges the gap between the academic
                                        world and the local community.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="lg:h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/2-download.jpeg" alt="">
                                </div>
                                <div class="lg:h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 2</span>                            
                                    </div>
                                    <h1 class="text-sm font-medium">Educational Outreach Programs</h1>
                                    <p class="text-xs text-justify">UCES offers diverse educational outreach programs,
                                        including workshops, seminars, and continuing education courses. These programs
                                        cater to community members of all ages,and academic enrichment, thus fostering a
                                        culture of lifelong learning.</p>
                                </div>
                            </div>                     
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="lg:h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/3-download.jpeg" alt="">
                                </div>
                                <div class="lg:h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                            <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                            <span class="text-[.7rem] font-light">Article 3</span>                            
                                        </div>
                                    <h1 class="text-sm font-medium"> Health and Wellness Initiatives</h1>
                                    <p class="text-xs text-justify">Health and wellness are central to UCESS’s mission. The
                                        system conducts health screenings, wellness workshops, and fitness classes, promoting
                                        healthy living among community members.</p>
                                </div>
                            </div>

                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/4-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 4</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Economic Development Support</h1>
                                    <p class="text-xs text-justify">
                                        UCES plays a vital role in local economic development by offering consulting services,
                                        entrepreneurial training, and business incubation programs. These initiatives support local
                                        businesses, enhance employment opportunities within the
                                        community.</p>
                                </div>
                            </div>                     
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/5-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 5</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Environmental Sustainability Projects</h1>
                                    <p class="text-xs text-justify">
                                        Environmental sustainability is a key focus of UCESS. The system implements community-based
                                        projects like urban gardening, recycling programs, and conservation initiatives. Educational
                                        programs on stewardship.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/6-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 6</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Cultural and Recreational Activities</h1>
                                    <p class="text-xs text-justify">
                                        To enrich community life, UCESS organizes cultural events, art exhibits, and recreational
                                        activities. These programs celebrate diversity and provide access to university facilities,
                                        such as libraries, a vibrant cultural
                                        scene.</p>
                                </div>
                            </div>                    
                        </div>
                    </div>                
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/7-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 7</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Research and Community Collaboration</h1>
                                    <p class="text-xs text-justify">
                                        UCES encourages community participation in research projects that address local challenges
                                        and contribute to societal advancement. Collaborative projects between university
                                        researchers and community members drive innovation for real-world problems.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/8-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 8</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Youth Mentorship Programs</h1>
                                    <p class="text-xs text-justify">
                                        UCES offers youth mentorship programs, pairing university students and faculty with local
                                        young people. These programs provide guidance, support, and inspiration, helping youth
                                        achieve their academic and personal goals while fostering positive relationships.</p>
                                </div>
                            </div>                       
                        </div>
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/9-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 9</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Adult Learning Opportunities</h1>
                                    <p class="text-xs text-justify">
                                        Adult learners benefit from UCESS’s wide range of continuing education courses and
                                        professional development workshops. These opportunities enable adults to acquire new skills,
                                        advance their careers, and engage in lifelong learning.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/10-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 10</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Community Health Clinics</h1>
                                    <p class="text-xs text-justify">
                                        UCES partners with local healthcare providers to establish community health clinics. These
                                        clinics offer accessible medical services, health education, and preventative care,
                                        addressing the health needs of underserved populations.</p>
                                </div>
                            </div>                      
                        </div>
                    </div>
                    <!-- Item 6 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/11-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 11</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Entrepreneurial Training Programs</h1>
                                    <p class="text-xs text-justify">
                                        To support aspiring entrepreneurs, UCESS offers specialized training programs. These
                                        programs cover business planning, financial management, marketing strategies, and more,
                                        equipping participants with the skills needed to succeed in their ventures.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/12-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 12</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Urban Gardening Initiatives</h1>
                                    <p class="text-xs text-justify">
                                        Urban gardening projects under UCESS promote sustainable living and community engagement.
                                        These projects provide fresh produce to local residents, create green spaces, and offer
                                        educational and environmental conservation.</p>
                                </div>
                            </div>                     
                        </div>
                    </div>
                    <!-- Item 7 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/13-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 13</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Arts and Culture Celebrations</h1>
                                    <p class="text-xs text-justify">
                                        UCES organizes various arts and culture celebrations, including festivals, performances, and
                                        exhibits. These events highlight the community's diverse cultural heritage and provide
                                        platforms for local artists to showcase their talents.</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/14-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 14</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Sports and Fitness Programs</h1>
                                    <p class="text-xs text-justify">
                                        UCES offers sports and fitness programs that encourage physical activity and healthy
                                        lifestyles. Community members can participate in organized sports leagues, fitness classes,
                                        and wellness challenges, promoting overall well-being.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <!-- Item 8 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <div class="flex space-x-10 items-center justify-center h-full">
                            <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                                <div class="h-[50%] overflow-hidden object-cover">
                                    <img class="object-cover h-full w-full" src="/src/assets/img/15-download.jpeg" alt="">
                                </div>
                                <div class="h-[50%] p-4 space-y-3">
                                    <div class="flex justify-between">
                                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                                <span class="text-[.7rem] font-light">Article 15</span>                            
                                            </div>
                                    <h1 class="text-sm font-medium">Volunteer Opportunities</h1>
                                    <p class="text-xs text-justify">
                                        Volunteerism is a cornerstone of UCESS. The system provides numerous volunteer opportunities
                                        for university students, faculty, and community members to engage in meaningful service
                                        projects, fostering a sense of community and shared responsibility.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                    <button type="button"
                        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm/30 dark:bg-gray-800/30 group-hover:bg-white shadow-sm/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm/30 dark:bg-gray-800/30 group-hover:bg-white shadow-sm/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
            </div>
        </div>

                
        <div class="block md:hidden  w-full">
        <div id="controls-carousel" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-[50svh] overflow-hidden rounded-lg md:h-96">

                <div class="hidden duration-700 ease-in-out" data-carousel-item>      
                    <div class="bg-white shadow-sm w-[20rem] mx-auto flex flex-col h-full">                         
                        <div class="lg:h-[50%] object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/1-download.jpeg" alt="">
                        </div>
                        
                        <div class="lg:h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                <span class="text-[.7rem] font-light">Article 1</span>                            
                            </div>
                            <h1 class="text-sm font-medium">Overview of the University Community Extension Services
                                System</h1>
                            <p class="text-xs text-justify">The University Community Extension Services System
                                (UCESS) is a comprehensive initiative that bridges the gap between the academic
                                world and the local community.</p>
                        </div>
                    </div>                                                    
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>          
                    <div class="bg-white shadow-sm w-[20rem] mx-auto flex flex-col h-full">
                        <div class="lg:h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/2-download.jpeg" alt="">
                        </div>
                        <div class="lg:h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                <span class="text-[.7rem] font-light">Article 2</span>                            
                            </div>
                            <h1 class="text-sm font-medium">Educational Outreach Programs</h1>
                            <p class="text-xs text-justify">UCES offers diverse educational outreach programs,
                                including workshops, seminars, and continuing education courses. These programs
                                cater to community members of all ages,and academic enrichment, thus fostering a
                                culture of lifelong learning.</p>
                        </div>
                    </div>                                            
                    
                </div>                   
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                        
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="lg:h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/3-download.jpeg" alt="">
                        </div>
                        <div class="lg:h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                    <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                    <span class="text-[.7rem] font-light">Article 3</span>                            
                                </div>
                            <h1 class="text-sm font-medium"> Health and Wellness Initiatives</h1>
                            <p class="text-xs text-justify">Health and wellness are central to UCESS’s mission. The
                                system conducts health screenings, wellness workshops, and fitness classes, promoting
                                healthy living among community members.</p>
                        </div>
                    </div>                    
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                        
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/4-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 4</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Economic Development Support</h1>
                            <p class="text-xs text-justify">
                                UCES plays a vital role in local economic development by offering consulting services,
                                entrepreneurial training, and business incubation programs. These initiatives support local
                                businesses, enhance employment opportunities within the
                                community.</p>
                        </div>
                    </div>                     
                </div>
                </div>       
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                         
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/5-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 5</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Environmental Sustainability Projects</h1>
                            <p class="text-xs text-justify">
                                Environmental sustainability is a key focus of UCESS. The system implements community-based
                                projects like urban gardening, recycling programs, and conservation initiatives. Educational
                                programs on stewardship.</p>
                        </div>
                    </div>                  
                </div>
                </div>                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                         
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/6-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 6</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Cultural and Recreational Activities</h1>
                            <p class="text-xs text-justify">
                                To enrich community life, UCESS organizes cultural events, art exhibits, and recreational
                                activities. These programs celebrate diversity and provide access to university facilities,
                                such as libraries, a vibrant cultural
                                scene.</p>
                        </div>
                    </div>                    
                </div>
                </div>                        
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                          
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/7-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 7</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Research and Community Collaboration</h1>
                            <p class="text-xs text-justify">
                                UCES encourages community participation in research projects that address local challenges
                                and contribute to societal advancement. Collaborative projects between university
                                researchers and community members drive innovation for real-world problems.</p>
                        </div>
                    </div>                     
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                          
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/8-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 8</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Youth Mentorship Programs</h1>
                            <p class="text-xs text-justify">
                                UCES offers youth mentorship programs, pairing university students and faculty with local
                                young people. These programs provide guidance, support, and inspiration, helping youth
                                achieve their academic and personal goals while fostering positive relationships.</p>
                        </div>
                    </div>                       
                </div>
                </div>               
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                         
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/9-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 9</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Adult Learning Opportunities</h1>
                            <p class="text-xs text-justify">
                                Adult learners benefit from UCESS’s wide range of continuing education courses and
                                professional development workshops. These opportunities enable adults to acquire new skills,
                                advance their careers, and engage in lifelong learning.</p>
                        </div>
                    </div>                     
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">
                    
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/10-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 10</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Community Health Clinics</h1>
                            <p class="text-xs text-justify">
                                UCES partners with local healthcare providers to establish community health clinics. These
                                clinics offer accessible medical services, health education, and preventative care,
                                addressing the health needs of underserved populations.</p>
                        </div>
                    </div>                      
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                           
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/11-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 11</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Entrepreneurial Training Programs</h1>
                            <p class="text-xs text-justify">
                                To support aspiring entrepreneurs, UCESS offers specialized training programs. These
                                programs cover business planning, financial management, marketing strategies, and more,
                                equipping participants with the skills needed to succeed in their ventures.</p>
                        </div>
                    </div>                    
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                           
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/12-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 12</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Urban Gardening Initiatives</h1>
                            <p class="text-xs text-justify">
                                Urban gardening projects under UCESS promote sustainable living and community engagement.
                                These projects provide fresh produce to local residents, create green spaces, and offer
                                educational and environmental conservation.</p>
                        </div>
                    </div>                     
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                         
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/13-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 13</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Arts and Culture Celebrations</h1>
                            <p class="text-xs text-justify">
                                UCES organizes various arts and culture celebrations, including festivals, performances, and
                                exhibits. These events highlight the community's diverse cultural heritage and provide
                                platforms for local artists to showcase their talents.</p>
                        </div>
                    </div>               
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">                         
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/14-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 14</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Sports and Fitness Programs</h1>
                            <p class="text-xs text-justify">
                                UCES offers sports and fitness programs that encourage physical activity and healthy
                                lifestyles. Community members can participate in organized sports leagues, fitness classes,
                                and wellness challenges, promoting overall well-being.</p>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="flex space-x-10 items-center justify-center h-full">
                    <div class="bg-white shadow-sm w-[20rem] flex flex-col h-full">
                        <div class="h-[50%] overflow-hidden object-cover">
                            <img class="object-cover h-full w-full" src="/src/assets/img/15-download.jpeg" alt="">
                        </div>
                        <div class="h-[50%] p-4 space-y-3">
                            <div class="flex justify-between">
                                        <span class="text-[.7rem] font-light">Posted: July 22, 2025</span>                            
                                        <span class="text-[.7rem] font-light">Article 15</span>                            
                                    </div>
                            <h1 class="text-sm font-medium">Volunteer Opportunities</h1>
                            <p class="text-xs text-justify">
                                Volunteerism is a cornerstone of UCESS. The system provides numerous volunteer opportunities
                                for university students, faculty, and community members to engage in meaningful service
                                projects, fostering a sense of community and shared responsibility.</p>
                        </div>
                    </div>                     
                </div>
                </div>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        </div>

    </section>


</template>

<script setup>

</script>

<style scoped></style>