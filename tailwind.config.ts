import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        copperfield: {
          '50': '#fdf5ef',
          '100': '#fae7da',
          '200': '#f3cdb5',
          '300': '#ecaa85',
          '400': '#e58962',
          '500': '#dc5e33',
          '600': '#ce4828',
          '700': '#ab3623',
          '800': '#892d23',
          '900': '#6f281f',
          '950': '#3b110f',
        },
        yuma: {
          '50': '#f8f8f2',
          '100': '#eae9db',
          '200': '#d4d2b3',
          '300': '#bcb88a',
          '400': '#aea671',
          '500': '#a1925f',
          '600': '#8d7b52',
          '700': '#776346',
          '800': '#63523d',
          '900': '#524335',
          '950': '#2d241b',
        },
        asparagus: {
          '50': '#f5f6ef',
          '100': '#e8ebdc',
          '200': '#d3dabc',
          '300': '#b8c294',
          '400': '#9caa71',
          '500': '#8a9a5b',
          '600': '#637040',
          '700': '#4d5734',
          '800': '#40472d',
          '900': '#373e29',
          '950': '#1c2013',
        },
        kabul: {
          '50': '#f5f4f1',
          '100': '#e6e2db',
          '200': '#d0c6b8',
          '300': '#b4a490',
          '400': '#9e8871',
          '500': '#907862',
          '600': '#7b6353',
          '700': '#675147',
          '800': '#55443e',
          '900': '#4b3c38',
          '950': '#2a201e',
        },
        'crater-brown': {
          '50': '#f9f5f3',
          '100': '#f2e8e2',
          '200': '#e4cfc4',
          '300': '#d2af9f',
          '400': '#bf8a78',
          '500': '#b1705e',
          '600': '#a45e52',
          '700': '#894c45',
          '800': '#6f3f3d',
          '900': '#4a2c2a',
          '950': '#301b1a',
        },
        iron: {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dfdfdf',
          '300': '#d3d3d3',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        silver: {
          '50': '#f7f7f7',
          '100': '#f0f0f0',
          '200': '#e3e3e3',
          '300': '#d1d1d1',
          '400': '#c0c0c0',
          '500': '#aaaaaa',
          '600': '#969696',
          '700': '#818181',
          '800': '#6a6a6a',
          '900': '#585858',
          '950': '#333333',
        },
        alto: {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dcdcdc',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        'powder-ash': {
          '50': '#f3f6f4',
          '100': '#e3e8e3',
          '200': '#c9d1ca',
          '300': '#b2beb5',
          '400': '#7a8d7f',
          '500': '#5b6e61',
          '600': '#45564b',
          '700': '#37453c',
          '800': '#2d3831',
          '900': '#262e29',
          '950': '#151917',
        },
        'slate-gray': {
          '50': '#f5f8f8',
          '100': '#ecf2f3',
          '200': '#dde5e8',
          '300': '#c7d5da',
          '400': '#b0c0c9',
          '500': '#9bacb9',
          '600': '#8496a7',
          '700': '#708090',
          '800': '#5d6976',
          '900': '#4e5861',
          '950': '#2e3438',
        },
        gray: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#808080',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        'dove-gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#696969',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        pewter: {
          '50': '#f6f7f7',
          '100': '#e1e6e4',
          '200': '#c2cdc8',
          '300': '#96a8a1',
          '400': '#768b83',
          '500': '#5c7069',
          '600': '#485953',
          '700': '#3c4945',
          '800': '#333c3a',
          '900': '#2d3432',
          '950': '#171c1b',
        },
        'limed-spruce': {
          '50': '#f3f7f8',
          '100': '#e0eaed',
          '200': '#c5d6dc',
          '300': '#9cb9c4',
          '400': '#6c93a4',
          '500': '#517889',
          '600': '#466474',
          '700': '#3d5361',
          '800': '#36454f',
          '900': '#323e47',
          '950': '#1e272e',
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
    fontFamily: {
      display: 'var(--font-display)',
      'ui-font': 'var(--font-ui)',
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
} satisfies Config;