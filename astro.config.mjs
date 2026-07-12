// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/trader-training-2',
  integrations: [
    starlight({
      title: '頂尖操盤手的養成計畫 2',
      description: '交易王者的心智修練:資金管理、情緒控管、失利診斷與邁向成功四階段。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '交易心法與資金管理',
          items: [
            { label: '交易是一樁生意:五個步驟打造獲利事業', slug: 'unit01' },
            { label: '交易金字塔、交易理念與三項簡單規則', slug: 'unit02' },
            { label: '我的兩套交易系統與停損的藝術', slug: 'unit03' },
            { label: '讓利潤奔馳:掌握趨勢的訣竅', slug: 'unit04' },
            { label: '資金管理的作用與心法', slug: 'unit05' },
            { label: '資金管理系統 A 與 B:累積獲利的技術', slug: 'unit06' },
            { label: '資金管理系統 C 與停損公式', slug: 'unit07' },
          ],
        },
        {
          label: '交易心理修練',
          items: [
            { label: '心理素質:從虧損陰影走向贏家心態', slug: 'unit08' },
            { label: '避免情緒化交易與情緒控管技巧', slug: 'unit09' },
            { label: '交易的躁鬱症模式與大腦結構的影響', slug: 'unit10' },
            { label: '三個讓你亂了陣腳的心理因素', slug: 'unit11' },
          ],
        },
        {
          label: '交易失利診斷與致勝之路',
          items: [
            { label: '新時代交易機會與突破 90%虧損魔咒', slug: 'unit12' },
            { label: '交易失利診斷(一):系統缺失與衝動交易', slug: 'unit13' },
            { label: '交易失利診斷(二):紀律鬆散與資金管理疏漏', slug: 'unit14' },
            { label: '交易失利診斷(三):學習心態與自我價值', slug: 'unit15' },
          ],
        },
        {
          label: '邁向成功四階段',
          items: [
            { label: '邁向成功的四個階段:總覽與自動化交易', slug: 'unit16' },
            { label: '成功四階段實戰:從學習到獲利習慣', slug: 'unit17' },
          ],
        },
        {
          label: '附錄:實戰交易系統與交易心理',
          items: [
            { label: 'Xtreme Stop 系統:完整操作步驟', slug: 'unit19' },
            { label: 'ZeitGap 系統(一):辨識跳空缺口與交易理念', slug: 'unit20' },
            { label: 'ZeitGap 系統(二):停損規則與實戰練習', slug: 'unit21' },
            { label: '情緒雲霄飛車(一):認識交易情緒與大腦', slug: 'unit22' },
            { label: '情緒雲霄飛車(二):辨識、掌控與改變交易行為', slug: 'unit23' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
