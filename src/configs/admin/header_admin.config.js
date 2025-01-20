// import { NIcon } from 'naive-ui'
// import { h } from 'vue'
// import { BookOutline as BookIcon } from '@vicons/ionicons5'
//
// function renderIcon(icon) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }

const header_admin = [
  {
    label: 'Apps',
    key: 'apps',
    children: [
      {
        label: 'Rat',
        key: 'rat',
      },
    ],
  },
  {
    label: 'Chat',
    key: 'chat',
  },
  {
    label: 'Calendar',
    key: 'calendar'
  },
  {
    label: 'Notes',
    key: 'notes'
  },
]

export { header_admin }
