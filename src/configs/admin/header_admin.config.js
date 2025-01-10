import { NIcon } from 'naive-ui'
import { h } from 'vue'
import { BookOutline as BookIcon } from '@vicons/ionicons5'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const header_admin = [
  {
    label: 'AAAAAA',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: 'Rat',
        key: 'rat',
      },
    ],
  },
]

export { header_admin }
