<template>
  <Disclosure as="nav" class="nav" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-end">
        <div
          class="sticky top-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
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

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts" setup>
import NavigateIcon from "./NavigateIcon.vue";
import { darkModeStore } from "@/store/darkmode/index.ts";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, reactive } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
const router = useRouter();

onMounted(() => {});

const auth = "storeAuth()";

const logout = () => {
  // auth.logout();
};

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
  const icons = [
    { name: "Ligth", icon: "MoonIcon", click: toggleDarkMode },
    { name: "Dark", icon: "SunIcon", click: toggleDarkMode },
  ];

  return icons[darkMode.isDarkModeOn?1:0];
});
//
</script>
