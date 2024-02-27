// 以下代码需全部 cv 过去!!! 如果没有的话可能会引起 unocss 插件不起作用,导致没有提示
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss';

export default defineConfig({
  theme: {},
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
  ],
  shortcuts: {
    // 这里可以放全局公共样式
    'h-btn': 'h-48px w-100% bg-#5C33BE b-none text-white rounded-8px',

    'b-1-e': 'border-1 border-solid border-[#eee]',
    'bb-1-e': 'border-b-1 border-b-solid border-[#eee]',

    'flex-center': 'flex flex-justify-between flex-items-center',
  },
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [transformerAttributifyJsx()],
});
