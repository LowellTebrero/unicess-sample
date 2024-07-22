<template>
  <div class="bg-slate-100">
      <Navbar/>
      <Hero/>
      <LatestSection/>
      <AboutSection/>
      <ArticleSection/>
      <ProgramServices/>
      <MissionVissionSection/>
      <FooterSection/>
      <div class="w-[90%] mx-auto">
      </div>
     
  </div>
</template>


<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero/HeroSection.vue';
import SubHeroSection from '@/components/Hero/SubHeroSection.vue';
import LatestSection from '@/components/Latest/LatestSection.vue';
import AboutSection from '@/components/About/AboutSection.vue';
import ArticleSection from '@/components/Article/ArticleSection.vue';
import ProgramServices from '@/components/Program/ProgramServices.vue';
import MissionVissionSection from '@/components/MissionVission/MissionVissionSection.vue';
import FooterSection from '@/components/Footer/FooterSection.vue';
</script>