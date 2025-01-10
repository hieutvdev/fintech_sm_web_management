<template>
  <n-space vertical>
    <!-- <n-space> <n-switch v-model:value="inverted" /> inverted </n-space> -->
    <n-layout>
      <n-layout-header
        class="h-[50px] flex items-center justify-between"
        :inverted="inverted"
        bordered
      >
        <div>HI</div>
        <n-menu mode="horizontal" :inverted="inverted" :options="header_admin" />
      </n-layout-header>

      <!-- Body -->
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="height: calc(100vh - 80px)"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="20"
            :options="navbar_admin"
          />
        </n-layout-sider>

        <n-layout-content style="height: 100%; padding: 20px">
          <router-view />
        </n-layout-content>
      </n-layout>

      <n-layout-footer style="height: 30px" :inverted="inverted" bordered>
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">
import { navbar_admin } from '@/configs/admin/navbar_admin.config'
import { header_admin } from '@/configs/admin/header_admin.config'

import { ref } from 'vue'
var inverted = ref(false)

// [
//   {
//     label: 'Hear the Wind Sing',
//     key: 'hear-the-wind-sing',
//     icon: renderIcon(BookIcon),
//   },
//   {
//     label: 'Pinball 1973',
//     key: 'pinball-1973',
//     icon: renderIcon(BookIcon),
//     disabled: false,
//     children: [
//       {
//         label: 'Rat',
//         key: 'rat',
//       },
//     ],
//   },
// {
//   label: 'A Wild Sheep Chase',
//   key: 'a-wild-sheep-chase',
//   disabled: true,
//   icon: renderIcon(BookIcon),
// },
// {
//   label: 'Dance Dance Dance',
//   key: 'Dance Dance Dance',
//   icon: renderIcon(BookIcon),
//   children: [
//     {
//       type: 'group',
//       label: 'People',
//       key: 'people',
//       children: [
//         {
//           label: 'Narrator',
//           key: 'narrator',
//           icon: renderIcon(PersonIcon),
//         },
//         {
//           label: 'Sheep Man',
//           key: 'sheep-man',
//           icon: renderIcon(PersonIcon),
//         },
//       ],
//     },
//     {
//       label: 'Beverage',
//       key: 'beverage',
//       icon: renderIcon(WineIcon),
//       children: [
//         {
//           label: 'Whisky',
//           key: 'whisky',
//         },
//       ],
//     },
//     {
//       label: 'Food',
//       key: 'food',
//       children: [
//         {
//           label: 'Sandwich',
//           key: 'sandwich',
//         },
//       ],
//     },
//     {
//       label: 'The past increases. The future recedes.',
//       key: 'the-past-increases-the-future-recedes',
//     },
//   ],
// },
// ]
</script>
