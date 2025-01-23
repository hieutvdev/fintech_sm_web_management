import { NIcon } from 'naive-ui'
import { h } from 'vue'
import { BookOutline as BookIcon, NewspaperOutline as ArticleIcon } from '@vicons/ionicons5'


function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const navbar_admin = [
  {
    label: 'HI',
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
  {
    label: 'Article',
    key: 'article',
    icon: renderIcon(ArticleIcon),
    disabled: false,
    children: [
      {
        label: 'List',
        key: 'article-list',
      },
      {
        label: 'Details',
        key: 'article-details',
      },
      {
        label: 'Create',
        key: 'article-create',
      },
      {
        label: 'Edit',
        key: 'article-edit',
      },
    ]
  }
]

export { navbar_admin }
