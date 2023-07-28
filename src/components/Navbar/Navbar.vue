<template>
  <Disclosure as="nav" class="nav isDark" v-slot="{ open }">
    <div class="mx-auto  px-2  lg:px-8">
      <div class="grid  grid-cols-3  grid-rows-2 sm:grid-cols-4 sm:grid-rows-1">
        <h2 class=" p-2 text-2xl row-span-1 col-span-2 sm:col-span-1">
          {{ user.welcome }}
        </h2>
        <div class="flex justify-around row-span-2 col-span-2 sm:col-span-2 ">
          <NavigateIcon
            :icon="darkModeIcon.icon"
            @click="darkModeIcon.click()"
            :params="darkModeIcon.params"
          />

          <NavigateIcon
            v-for="(icon, i) in navigation"
            :key="i"
            :icon="icon.icon"
            @click="icon.click()"
            :params="icon.params"
          />
        </div>

        <!-- Profile dropdown -->
        <Menu as="div" class="flex justify-center items-center col-start-3 row-start-1 row-span-2 col-span-1 sm:row-span-1 sm:col-span-1">
          <div>
            <MenuButton class="flex rounded-full text-sm">
              <span class="sr-only">Open user menu</span>
              <img
                class="  rounded-full"
                :src="user.avatar"
                alt=""
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >Your Profile</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >Settings</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  @click="logout"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                  ]"
                  >Sign out</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>

        
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-sm px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { darkModeStore } from "@/store/darkmode";
import { authStore } from "@/modules/auth/store";
import { userStore } from "@/modules/user/store";
import NavigateIcon from "./NavigateIcon.vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { storeToRefs } from "pinia";
const router = useRouter();
const auth = authStore();
const user = userStore();

const logout = () => {
  auth.logout();

  router.push({ name: "login" });
};

onMounted(() => {});

const toggleDarkMode = () => {
  // sconsole.log('asdasd');

  const darkMode = darkModeStore();
  darkMode.toggle();
};

const goTo = (name) => {
  name = name.toLowerCase();
  router.push({ name });
};
const goToNews = () => {
  goTo("news");
};
const navigation = reactive([
  { name: "News", icon: "NewspaperIcon", click: goToNews },
  { name: "Calendar", icon: "BellIcon", click: null },
  { name: "Chat", icon: "ChatBubbleLeftRightIcon", click: null },
]);
const darkModeIcon = computed(() => {
  const darkMode = darkModeStore();
  const icons = {
    light:{ name: "Light", icon: "MoonIcon", click: toggleDarkMode },
    dark:{ name: "Dark", icon: "SunIcon", click: toggleDarkMode },
  }  
  
  return icons[darkMode.theme];
});
//
</script>
