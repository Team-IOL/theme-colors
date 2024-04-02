
/**
 * Defines a comprehensive palette of colors formatted for Tailwind CSS. 
 * This configuration includes standard colors like `inherit`, `current`, 
 * and `transparent`, alongside a detailed spectrum of color shades ranging 
 * from 50 (the lightest) to 950 (the darkest) for customizable color themes. 
 * This palette allows for extensive customization and precise theme control 
 * in web development projects.
 * 
 * @type {Object} COLORS_TAILWIND - Tailwind CSS color configuration object.
 * @property {string} inherit - Inherits the color from the parent element.
 * @property {string} current - Uses the currentColor value.
 * @property {string} transparent - Transparent color.
 * @property {string} black - Hex code for black color.
 * @property {string} white - Hex code for white color.
 * @property {Object} slate - Shades of slate from light to dark.
 * @property {string} slate.50 - #f8fafc
 * @property {string} slate.100 - #f1f5f9
 * @property {string} slate.200 - #e2e8f0
 * @property {string} slate.300 - #cbd5e1
 * @property {string} slate.400 - #94a3b8
 * @property {string} slate.500 - #64748b
 * @property {string} slate.600 - #475569
 * @property {string} slate.700 - #334155
 * @property {string} slate.800 - #1e293b
 * @property {string} slate.900 - #0f172a
 * @property {string} slate.950 - #020617
 * @property {Object} gray - Shades of gray from light to dark.
 * @property {string} gray.50 - #f9fafb
 * @property {string} gray.100 - #f3f4f6
 * @property {string} gray.200 - #e5e7eb
 * @property {string} gray.300 - #d1d5db
 * @property {string} gray.400 - #9ca3af
 * @property {string} gray.500 - #6b7280
 * @property {string} gray.600 - #4b5563
 * @property {string} gray.700 - #374151
 * @property {string} gray.800 - #1f2937
 * @property {string} gray.900 - #111827
 * @property {string} gray.950 - #030712
 * @property {Object} zinc - Shades of zinc from light to dark.
 * @property {string} zinc.50 - #fafafa
 * @property {string} zinc.100 - #f4f4f5
 * @property {string} zinc.200 - #e4e4e7
 * @property {string} zinc.300 - #d4d4d8
 * @property {string} zinc.400 - #a1a1aa
 * @property {string} zinc.500 - #71717a
 * @property {string} zinc.600 - #52525b
 * @property {string} zinc.700 - #3f3f46
 * @property {string} zinc.800 - #27272a
 * @property {string} zinc.900 - #18181b
 * @property {string} zinc.950 - #09090b
 * @property {Object} neutral - Shades of neutral from light to dark.
 * @property {string} neutral.50 - #fafafa
 * @property {string} neutral.100 - #f5f5f5
 * @property {string} neutral.200 - #e5e5e5
 * @property {string} neutral.300 - #d4d4d4
 * @property {string} neutral.400 - #a3a3a3
 * @property {string} neutral.500 - #737373
 * @property {string} neutral.600 - #525252
 * @property {string} neutral.700 - #404040
 * @property {string} neutral.800 - #262626
 * @property {string} neutral.900 - #171717
 * @property {string} neutral.950 - #0a0a0a
 * @property {Object} stone - Shades of stone from light to dark.
 * @property {string} stone.50 - #fafaf9
 * @property {string} stone.100 - #f5f5f4
 * @property {string} stone.200 - #e7e5e4
 * @property {string} stone.300 - #d6d3d1
 * @property {string} stone.400 - #a8a29e
 * @property {string} stone.500 - #78716c
 * @property {string} stone.600 - #57534e
 * @property {string} stone.700 - #44403c
 * @property {string} stone.800 - #292524
 * @property {string} stone.900 - #1c1917
 * @property {string} stone.950 - #0c0a09
 * @property {Object} red - Shades of red from light to dark.
 * @property {string} red.50 - #fef2f2
 * @property {string} red.100 - #fee2e2
 * @property {string} red.200 - #fecaca
 * @property {string} red.300 - #fca5a5
 * @property {string} red.400 - #f87171
 * @property {string} red.500 - #ef4444
 * @property {string} red.600 - #dc2626
 * @property {string} red.700 - #b91c1c
 * @property {string} red.800 - #991b1b
 * @property {string} red.900 - #7f1d1d
 * @property {string} red.950 - #450a0a
 * @property {Object} orange - Shades of orange from light to dark.
 * @property {string} orange.50 - #fff7ed
 * @property {string} orange.100 - #ffedd5
 * @property {string} orange.200 - #fed7aa
 * @property {string} orange.300 - #fdba74
 * @property {string} orange.400 - #fb923c
 * @property {string} orange.500 - #f97316
 * @property {string} orange.600 - #ea580c
 * @property {string} orange.700 - #c2410c
 * @property {string} orange.800 - #9a3412
 * @property {string} orange.900 - #7c2d12
 * @property {string} orange.950 - #431407
 * @property {Object} amber - Shades of amber from light to dark.
 * @property {string} amber.50 - #fffbeb
 * @property {string} amber.100 - #fef3c7
 * @property {string} amber.200 - #fde68a
 * @property {string} amber.300 - #fcd34d
 * @property {string} amber.400 - #fbbf24
 * @property {string} amber.500 - #f59e0b
 * @property {string} amber.600 - #d97706
 * @property {string} amber.700 - #b45309
 * @property {string} amber.800 - #92400e
 * @property {string} amber.900 - #78350f
 * @property {string} amber.950 - #451a03
 * @property {Object} yellow - Shades of yellow from light to dark.
 * @property {string} yellow.50 - #fefce8
 * @property {string} yellow.100 - #fef9c3
 * @property {string} yellow.200 - #fef08a
 * @property {string} yellow.300 - #fde047
 * @property {string} yellow.400 - #facc15
 * @property {string} yellow.500 - #eab308
 * @property {string} yellow.600 - #ca8a04
 * @property {string} yellow.700 - #a16207
 * @property {string} yellow.800 - #854d0e
 * @property {string} yellow.900 - #713f12
 * @property {string} yellow.950 - #422006
 * @property {Object} lime - Shades of lime from light to dark.
 * @property {string} lime.50 - #f7fee7
 * @property {string} lime.100 - #ecfccb
 * @property {string} lime.200 - #d9f99d
 * @property {string} lime.300 - #bef264
 * @property {string} lime.400 - #a3e635
 * @property {string} lime.500 - #84cc16
 * @property {string} lime.600 - #65a30d
 * @property {string} lime.700 - #4d7c0f
 * @property {string} lime.800 - #3f6212
 * @property {string} lime.900 - #365314
 * @property {string} lime.950 - #1a2e05
 * @property {Object} green - Shades of green from light to dark.
 * @property {string} green.50 - #f0fdf4
 * @property {string} green.100 - #dcfce7
 * @property {string} green.200 - #bbf7d0
 * @property {string} green.300 - #86efac
 * @property {string} green.400 - #4ade80
 * @property {string} green.500 - #22c55e
 * @property {string} green.600 - #16a34a
 * @property {string} green.700 - #15803d
 * @property {string} green.800 - #166534
 * @property {string} green.900 - #14532d
 * @property {string} green.950 - #052e16
 * @property {Object} emerald - Shades of emerald from light to dark.
 * @property {string} emerald.50 - #ecfdf5
 * @property {string} emerald.100 - #d1fae5
 * @property {string} emerald.200 - #a7f3d0
 * @property {string} emerald.300 - #6ee7b7
 * @property {string} emerald.400 - #34d399
 * @property {string} emerald.500 - #10b981
 * @property {string} emerald.600 - #059669
 * @property {string} emerald.700 - #047857
 * @property {string} emerald.800 - #065f46
 * @property {string} emerald.900 - #064e3b
 * @property {string} emerald.950 - #022c22
 * @property {Object} teal - Shades of teal from light to dark.
 * @property {string} teal.50 - #f0fdfa
 * @property {string} teal.100 - #ccfbf1
 * @property {string} teal.200 - #99f6e4
 * @property {string} teal.300 - #5eead4
 * @property {string} teal.400 - #2dd4bf
 * @property {string} teal.500 - #14b8a6
 * @property {string} teal.600 - #0d9488
 * @property {string} teal.700 - #0f766e
 * @property {string} teal.800 - #115e59
 * @property {string} teal.900 - #134e4a
 * @property {string} teal.950 - #042f2e
 * @property {Object} cyan - Shades of cyan from light to dark.
 * @property {string} cyan.50 - #ecfeff
 * @property {string} cyan.100 - #cffafe
 * @property {string} cyan.200 - #a5f3fc
 * @property {string} cyan.300 - #67e8f9
 * @property {string} cyan.400 - #22d3ee
 * @property {string} cyan.500 - #06b6d4
 * @property {string} cyan.600 - #0891b2
 * @property {string} cyan.700 - #0e7490
 * @property {string} cyan.800 - #155e75
 * @property {string} cyan.900 - #164e63
 * @property {string} cyan.950 - #083344
 * @property {Object} sky - Shades of sky from light to dark.
 * @property {string} sky.50 - #f0f9ff
 * @property {string} sky.100 - #e0f2fe
 * @property {string} sky.200 - #bae6fd
 * @property {string} sky.300 - #7dd3fc
 * @property {string} sky.400 - #38bdf8
 * @property {string} sky.500 - #0ea5e9
 * @property {string} sky.600 - #0284c7
 * @property {string} sky.700 - #0369a1
 * @property {string} sky.800 - #075985
 * @property {string} sky.900 - #0c4a6e
 * @property {string} sky.950 - #082f49
 * @property {Object} blue - Shades of blue from light to dark.
 * @property {string} blue.50 - #eff6ff
 * @property {string} blue.100 - #dbeafe
 * @property {string} blue.200 - #bfdbfe
 * @property {string} blue.300 - #93c5fd
 * @property {string} blue.400 - #60a5fa
 * @property {string} blue.500 - #3b82f6
 * @property {string} blue.600 - #2563eb
 * @property {string} blue.700 - #1d4ed8
 * @property {string} blue.800 - #1e40af
 * @property {string} blue.900 - #1e3a8a
 * @property {string} blue.950 - #172554
 * @property {Object} indigo - Shades of indigo from light to dark.
 * @property {string} indigo.50 - #eef2ff
 * @property {string} indigo.100 - #e0e7ff
 * @property {string} indigo.200 - #c7d2fe
 * @property {string} indigo.300 - #a5b4fc
 * @property {string} indigo.400 - #818cf8
 * @property {string} indigo.500 - #6366f1
 * @property {string} indigo.600 - #4f46e5
 * @property {string} indigo.700 - #4338ca
 * @property {string} indigo.800 - #3730a3
 * @property {string} indigo.900 - #312e81
 * @property {string} indigo.950 - #1e1b4b
 * @property {Object} violet - Shades of violet from light to dark.
 * @property {string} violet.50 - #f5f3ff
 * @property {string} violet.100 - #ede9fe
 * @property {string} violet.200 - #ddd6fe
 * @property {string} violet.300 - #c4b5fd
 * @property {string} violet.400 - #a78bfa
 * @property {string} violet.500 - #8b5cf6
 * @property {string} violet.600 - #7c3aed
 * @property {string} violet.700 - #6d28d9
 * @property {string} violet.800 - #5b21b6
 * @property {string} violet.900 - #4c1d95
 * @property {string} violet.950 - #2e1065
 * @property {Object} purple - Shades of purple from light to dark.
 * @property {string} purple.50 - #faf5ff
 * @property {string} purple.100 - #f3e8ff
 * @property {string} purple.200 - #e9d5ff
 * @property {string} purple.300 - #d8b4fe
 * @property {string} purple.400 - #c084fc
 * @property {string} purple.500 - #a855f7
 * @property {string} purple.600 - #9333ea
 * @property {string} purple.700 - #7e22ce
 * @property {string} purple.800 - #6b21a8
 * @property {string} purple.900 - #581c87
 * @property {string} purple.950 - #3b0764
 * @property {Object} fuchsia - Shades of fuchsia from light to dark.
 * @property {string} fuchsia.50 - #fdf4ff
 * @property {string} fuchsia.100 - #fae8ff
 * @property {string} fuchsia.200 - #f5d0fe
 * @property {string} fuchsia.300 - #f0abfc
 * @property {string} fuchsia.400 - #e879f9
 * @property {string} fuchsia.500 - #d946ef
 * @property {string} fuchsia.600 - #c026d3
 * @property {string} fuchsia.700 - #a21caf
 * @property {string} fuchsia.800 - #86198f
 * @property {string} fuchsia.900 - #701a75
 * @property {string} fuchsia.950 - #4a044e
 * @property {Object} pink - Shades of pink from light to dark.
 * @property {string} pink.50 - #fdf2f8
 * @property {string} pink.100 - #fce7f3
 * @property {string} pink.200 - #fbcfe8
 * @property {string} pink.300 - #f9a8d4
 * @property {string} pink.400 - #f472b6
 * @property {string} pink.500 - #ec4899
 * @property {string} pink.600 - #db2777
 * @property {string} pink.700 - #be185d
 * @property {string} pink.800 - #9d174d
 * @property {string} pink.900 - #831843
 * @property {string} pink.950 - #500724
 * @property {Object} rose - Shades of rose from light to dark.
 * @property {string} rose.50 - #fff1f2
 * @property {string} rose.100 - #ffe4e6
 * @property {string} rose.200 - #fecdd3
 * @property {string} rose.300 - #fda4af
 * @property {string} rose.400 - #fb7185
 * @property {string} rose.500 - #f43f5e
 * @property {string} rose.600 - #e11d48
 * @property {string} rose.700 - #be123c
 * @property {string} rose.800 - #9f1239
 * @property {string} rose.900 - #881337
 * @property {string} rose.950 - #4c0519
 */
const TAILWIND_COLORS = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },
  sky: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
    950: '#500724',
  },
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519',
  }
};

export default TAILWIND_COLORS