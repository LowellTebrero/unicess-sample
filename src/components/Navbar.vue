<template>
    <header class="sticky top-0 bg-blue-700 z-50">
        <nav class=" mx-auto h-[7vh] w-[90%] flex items-center justify-between">
            <h1 class="text-yellow-400 text-xl font-medium tracking-wide">UNICESS</h1>
            
            <div class="fixed w-0 lg:w-auto lg:relative top-0 right-[-8rem] lg:right-0 bg-blue-800 lg:bg-transparent h-full" id="sidebar" :class="{ 'w-change': isSidebarOpen }">
              <ul class="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:gap-x-10 lg:mt-0 mt-[5svh] text-white p-4 text-sm ">
                <li><a href="#home">Home</a></li>
                <li><a href="#latest">Latest</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#article">Article</a></li>
                <li><a href="#program">Progam</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="block lg:hidden ">
                  <SignedOut>
                  <SignInButton mode="modal" class=" p-2 text-white rounded bg-blue-900" />
                </SignedOut>
                </li>
                
              </ul>
            </div>
            
            <div class="flex space-x-2 items-center">
              <div>
                <SignedIn>
                  <div class="flex items-center gap-x-2 text-white z-50">
                    <h1 class="text-lg">Hi,</h1>
                    <UserButton/>
                  </div>
                </SignedIn>

                <SignedOut>
                  <SignInButton mode="modal" class=" px-2 text-white rounded" after-sign-in-url="/" />
                </SignedOut>
              </div>

              <div class="block lg:hidden z-50 mt-1">
                <button @click="toggle" type="button">
                  <img src="/src/assets/img/burger.png" width="30" alt="" />
                </button>
              </div>
            </div>         
        </nav>
    </header>
</template>

<script setup>
import { SignInButton, SignedIn, SignedOut, UserButton, RedirectToUserProfile } from 'vue-clerk'
import { ref } from 'vue';

const isSidebarOpen = ref(false);

function toggle() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>

.w-zero {
    width: 0rem;
}

.w-change {
  width: 20rem;

}

#sidebar {
  transition: width 0.3s;
}

</style>
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
