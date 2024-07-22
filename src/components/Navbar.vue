<template>
    <header class="sticky top-0 bg-blue-700 z-50">
        <nav class=" mx-auto h-[7vh] w-[90%] flex items-center justify-between">
            <h1 class="text-yellow-400 text-xl font-medium tracking-wide">UNICESS</h1>
            <ul class="flex gap-x-10 text-white">
                <a href="#home">Home</a>
               <a href="#latest">Latest</a>
               <a href="#about">About</a>
               <a href="#article">Article</a>
               <a href="#program">Progam</a>
               <a href="#mission">Mission</a>
               <a href="#contact">Contact</a>
           </ul>
            <div>
              <!-- <Dropdown class="text-white">
                <template v-slot:body>
                  <div  class="flex items-center gap-x-2">
                    <div>
                      <button @click="toggleDropdown" v-if="!isLoading && userdata !== null">{{ userdata.name }}</button>
                     
                      <div v-else-if="isLoading">
                        <Icon icon="eos-icons:loading" width="1.2rem" height="1.2rem" />
                      </div>
                      <button v-else @click="toggleDropdown">Login</button>
                    </div>                         
                  </div>
                </template>

                <template v-slot:dropdown>
                    <router-link to="/login" class="text-md hover:bg-slate-100" v-if="!userdata">Login</router-link>
                    <router-link to="/register" class="text-md hover:bg-slate-100" v-if="!userdata">Register</router-link>
                    <router-link to="/dashboard" class="text-md hover:bg-slate-100" v-if="userdata">Dashboard</router-link>
                    <li class="text-md hover:bg-slate-100 cursor-pointer" v-if="userdata" @click.prevent="handleLogout">Logout</li>           
                </template>

              </Dropdown>             -->
            </div>
        </nav>
    </header>
</template>

<!-- <script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '../store/index';
import { RouterLink, useRouter } from 'vue-router'
import api from '../lib/axios'
import Cookies from "js-cookie";
import { useToast } from 'vue-toastification';
import { Icon } from '@iconify/vue';
import Dropdown from './Dropdown.vue';

const authStore = useAuthStore();
const toast = useToast();
let userdata = ref(null);
const isLoading = ref(true);

const emit = defineEmits(['toggle-dropdown']);
const toggleDropdown = () => {
  emit('toggle-dropdown');
};



const router = useRouter();

onMounted(async () => {

  await authStore.fetchUserData();
  isLoading.value = false;

});

userdata = computed(() => authStore.userdata);

const handleLogout = async() => {
    try {
   
    const {status, data}  = await api.post("/api/logout")

    if (status == 200) {
      console.log("Logout successful:", data);
      Cookies.remove("access_token");
      // authStore.setIsAuthenticated(false);
      isLoading.value = false;
      localStorage.removeItem("user_data");
      toast.success("Logout Successfully!");
      router.push("/login");
    }
  } 
  catch (error) {
    console.error("Login error:", error);

  }
}


</script> -->
