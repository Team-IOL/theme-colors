/**
 * A collection of color constants for various UI states and themes.
 * @constant
 * @type {Object}
 *
 * @property {string} confirm50 - Lightest shade of confirmation green.
 * @property {string} confirm100 - Light shade of confirmation green.
 * @property {string} confirm200 - Medium-light shade of confirmation green.
 * @property {string} confirm300 - Medium shade of confirmation green.
 * @property {string} confirm400 - Dark shade of confirmation green.
 *
 * @property {string} error50 - Lightest shade of error red.
 * @property {string} error100 - Light shade of error red.
 * @property {string} error200 - Medium-light shade of error red.
 * @property {string} error300 - Medium shade of error red.
 * @property {string} error400 - Dark shade of error red.
 *
 * @property {string} neutral50 - Lightest shade of neutral.
 * @property {string} neutral100 - Very light shade of neutral.
 * @property {string} neutral200 - Light shade of neutral.
 * @property {string} neutral300 - Medium-light shade of neutral.
 * @property {string} neutral400 - Medium shade of neutral.
 * @property {string} neutral500 - Medium-dark shade of neutral.
 * @property {string} neutral600 - Dark shade of neutral.
 * @property {string} neutral700 - Very dark shade of neutral.
 * @property {string} neutral800 - Darker shade of neutral.
 * @property {string} neutral900 - Darkest shade of neutral.
 *
 * @property {string} primary50 - Lightest shade of primary blue.
 * @property {string} primary100 - Light shade of primary blue.
 * @property {string} primary200 - Medium-light shade of primary blue.
 * @property {string} primary300 - Medium shade of primary blue.
 * @property {string} primary400 - Dark shade of primary blue.
 *
 * @property {string} loader_background - Background color for loaders.
 * @property {string} loader_foreground - Foreground color for loaders.
 */
declare const IOL_COLORS: {
    confirm50: string;
    confirm100: string;
    confirm200: string;
    confirm300: string;
    confirm400: string;
    error50: string;
    error100: string;
    error200: string;
    error300: string;
    error400: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    loader_background: string;
    loader_foreground: string;
};

/**
 * A collection of color constants for Hey Success.
 * @constant
 * @type {Object}
 * @property {string} container_color - Base color for containers.
 * @property {string} neutral100 - Darkest shade of neutral color.
 * @property {string} neutral200 - Dark shade of neutral color.
 * @property {string} neutral300 - Medium shade of neutral color.
 * @property {string} neutral400 - Light shade of neutral color.
 * @property {string} neutral500 - Lightest shade of neutral color.
 *
 * @property {string} green100 - Darkest shade of green.
 * @property {string} green200 - Dark shade of green.
 * @property {string} green300 - Medium shade of green.
 * @property {string} green400 - Light shade of green.
 *
 * @property {string} yellow100 - Darkest shade of yellow.
 * @property {string} yellow200 - Dark shade of yellow.
 * @property {string} yellow300 - Medium shade of yellow.
 * @property {string} yellow400 - Light shade of yellow.
 *
 * @property {string} blue100 - Darkest shade of blue.
 * @property {string} blue200 - Dark shade of blue.
 * @property {string} blue300 - Medium shade of blue.
 * @property {string} blue400 - Light shade of blue.
 *
 * @property {string} red100 - Darkest shade of red.
 * @property {string} red200 - Dark shade of red.
 * @property {string} red300 - Medium shade of red.
 * @property {string} red400 - Light shade of red.
 */
declare const HS_COLORS: {
    container_color: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    green100: string;
    green200: string;
    green300: string;
    green400: string;
    yellow100: string;
    yellow200: string;
    yellow300: string;
    yellow400: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    red100: string;
    red200: string;
    red300: string;
    red400: string;
};

/**
 * Defines the color palette for the ZIGMAFY UI theme, including primary, secondary,
 * and various shades for different UI elements like backgrounds, text, and borders.
 * Each color is represented in HEX format and is intended for specific use cases to ensure
 * a cohesive look and feel across the UI.
 * @constant
 * @type {Object}
 * @property {string} primary_main - The main color for primary elements, a deep blue.
 * @property {string} primary_dark - A darker shade of the primary color for hover states and accents.
 * @property {string} primary_light - A lighter shade of the primary color for backgrounds and large areas.
 * @property {string} primary_contrast - The lightest shade, used for primary text or elements on dark backgrounds.
 * @property {string} secondary_main - The main secondary color, a light gray for secondary elements.
 * @property {string} secondary_dark - A darker shade of the secondary color for differentiation and depth.
 * @property {string} secondary_light - A lighter shade of the secondary color for subtle backgrounds.
 * @property {string} secondary_contrast - A contrasting shade for secondary elements on dark backgrounds.
 * @property {string} slate_primary_50 - The lightest slate shade, often used for backgrounds or large areas.
 * @property {string} slate_primary_100 - A very light slate shade for subtle differentiation.
 * @property {string} slate_primary_200 - A light slate shade for backgrounds and UI elements.
 * @property {string} slate_primary_300 - A medium light slate shade for secondary text and borders.
 * @property {string} slate_primary_400 - A medium slate shade for icons and passive elements.
 * @property {string} slate_primary_500 - A standard slate color for text and active elements.
 * @property {string} slate_primary_600 - A medium dark slate shade for emphasis and depth.
 * @property {string} slate_primary_700 - A dark slate shade for strong emphasis and contrast.
 * @property {string} slate_primary_800 - A very dark slate for high contrast elements and text.
 * @property {string} slate_primary_900 - The darkest slate shade, used sparingly for utmost contrast.
 * @property {string} neutral_50 - The lightest neutral, almost white, for backgrounds and UI elements.
 * @property {string} neutral_100 - A very light gray for background and layout.
 * @property {string} neutral_200 - A light neutral gray for UI elements and borders.
 * @property {string} neutral_300 - A mid-light gray for differentiation and layering.
 * @property {string} neutral_400 - A medium gray for placeholder text and inactive elements.
 * @property {string} neutral_500 - A standard gray for neutral text and icons.
 * @property {string} neutral_600 - A medium dark gray for important text and active elements.
 * @property {string} neutral_700 - A dark gray for emphasis and strong contrast.
 * @property {string} neutral_800 - A very dark gray for high contrast elements and text.
 * @property {string} neutral_900 - The darkest gray, used sparingly for utmost contrast and emphasis.
 * @property {string} gray_secondary_50 - The lightest gray secondary, for subtle backgrounds and large areas.
 * @property {string} gray_secondary_100 - A very light gray secondary for layout and differentiation.
 * @property {string} gray_secondary_200 - A light gray secondary for UI elements and borders.
 * @property {string} gray_secondary_300 - A mid-light gray secondary for secondary text and icons.
 * @property {string} gray_secondary_400 - A medium gray secondary for inactive elements and placeholders.
 * @property {string} gray_secondary_500 - A standard gray secondary for text and active UI elements.
 * @property {string} gray_secondary_600 - A medium dark gray secondary for emphasis and depth.
 * @property {string} gray_secondary_700 - A dark gray secondary for strong emphasis and contrast.
 * @property {string} gray_secondary_800 - A very dark gray secondary for high contrast elements and text.
 * @property {string} gray_secondary_900 - The darkest gray secondary, used sparingly for utmost contrast.
 * @property {string} stone_info_50 - The lightest stone shade, often used for informational backgrounds.
 * @property {string} stone_info_100 - A very light stone shade for subtle differentiation in informational elements.
 * @property {string} stone_info_200 - A light stone shade for informational UI elements and borders.
 * @property {string} stone_info_300 - A medium light stone shade for secondary informational text and icons.
 * @property {string} stone_info_400 - A medium stone shade for informational icons and passive elements.
 * @property {string} stone_info_500 - A standard stone color for informational text and active elements.
 * @property {string} stone_info_600 - A medium dark stone shade for emphasis in informational elements.
 * @property {string} stone_info_700 - A dark stone shade for strong emphasis and contrast in informational elements.
 * @property {string} stone_info_800 - A very dark stone for high contrast informational text and elements.
 * @property {string} stone_info_900 - The darkest stone shade, used sparingly for utmost contrast in informational elements.
 * @property {string} red_error_50 - The lightest error red, often used for background highlights of error states.
 * @property {string} red_error_100 - A very light error red for subtle error highlights and backgrounds.
 * @property {string} red_error_200 - A light error red for error backgrounds and UI elements.
 * @property {string} red_error_300 - A medium light error red for error messages and icons.
 * @property {string} red_error_400 - A medium error red for buttons and active error elements.
 * @property {string} red_error_500 - A standard error red for important error texts and critical elements.
 * @property {string} red_error_600 - A medium dark error red for emphasis and strong error indicators.
 * @property {string} red_error_700 - A dark error red for high emphasis and contrast in error states.
 * @property {string} red_error_800 - A very dark error red for utmost contrast in critical error messages.
 * @property {string} red_error_900 - The darkest error red, used sparingly for extreme emphasis in error states.
 * @property {string} yellow_warning_50 - The lightest warning yellow, for background highlights of warning states.
 * @property {string} yellow_warning_100 - A very light warning yellow for subtle warning highlights and backgrounds.
 * @property {string} yellow_warning_200 - A light warning yellow for warning backgrounds and UI elements.
 * @property {string} yellow_warning_300 - A medium light warning yellow for warning messages and icons.
 * @property {string} yellow_warning_400 - A medium warning yellow for buttons and active warning elements.
 * @property {string} yellow_warning_500 - A standard warning yellow for important warning texts and critical elements.
 * @property {string} yellow_warning_600 - A medium dark warning yellow for emphasis and strong warning indicators.
 * @property {string} yellow_warning_700 - A dark warning yellow for high emphasis and contrast in warning states.
 * @property {string} yellow_warning_800 - A very dark warning yellow for utmost contrast in critical warning messages.
 * @property {string} yellow_warning_900 - The darkest warning yellow, used sparingly for extreme emphasis in warning states.
 * @property {string} green_success_50 - The lightest success green, often used for background highlights of success states.
 * @property {string} green_success_100 - A very light success green for subtle success highlights and backgrounds.
 * @property {string} green_success_200 - A light success green for success backgrounds and UI elements.
 * @property {string} green_success_300 - A medium light success green for success messages and icons.
 * @property {string} green_success_400 - A medium success green for buttons and active success elements.
 * @property {string} green_success_500 - A standard success green for important success texts and critical elements.
 * @property {string} green_success_600 - A medium dark success green for emphasis and strong success indicators.
 * @property {string} green_success_700 - A dark success green for high emphasis and contrast in success states.
 * @property {string} green_success_800 - A very dark success green for utmost contrast in critical success messages.
 * @property {string} green_success_900 - The darkest success green, used sparingly for extreme emphasis in success states.
 */
declare const ZIGMAFY_COLORS: {
    primary_main: string;
    primary_dark: string;
    primary_light: string;
    primary_contrast: string;
    secondary_main: string;
    secondary_dark: string;
    secondary_light: string;
    secondary_contrast: string;
    slate_primary_50: string;
    slate_primary_100: string;
    slate_primary_200: string;
    slate_primary_300: string;
    slate_primary_400: string;
    slate_primary_500: string;
    slate_primary_600: string;
    slate_primary_700: string;
    slate_primary_800: string;
    slate_primary_900: string;
    neutral_50: string;
    neutral_100: string;
    neutral_200: string;
    neutral_300: string;
    neutral_400: string;
    neutral_500: string;
    neutral_600: string;
    neutral_700: string;
    neutral_800: string;
    neutral_900: string;
    gray_secondary_50: string;
    gray_secondary_100: string;
    gray_secondary_200: string;
    gray_secondary_300: string;
    gray_secondary_400: string;
    gray_secondary_500: string;
    gray_secondary_600: string;
    gray_secondary_700: string;
    gray_secondary_800: string;
    gray_secondary_900: string;
    stone_info_50: string;
    stone_info_100: string;
    stone_info_200: string;
    stone_info_300: string;
    stone_info_400: string;
    stone_info_500: string;
    stone_info_600: string;
    stone_info_700: string;
    stone_info_800: string;
    stone_info_900: string;
    red_error_50: string;
    red_error_100: string;
    red_error_200: string;
    red_error_300: string;
    red_error_400: string;
    red_error_500: string;
    red_error_600: string;
    red_error_700: string;
    red_error_800: string;
    red_error_900: string;
    yellow_warning_50: string;
    yellow_warning_100: string;
    yellow_warning_200: string;
    yellow_warning_300: string;
    yellow_warning_400: string;
    yellow_warning_500: string;
    yellow_warning_600: string;
    yellow_warning_700: string;
    yellow_warning_800: string;
    yellow_warning_900: string;
    green_success_50: string;
    green_success_100: string;
    green_success_200: string;
    green_success_300: string;
    green_success_400: string;
    green_success_500: string;
    green_success_600: string;
    green_success_700: string;
    green_success_800: string;
    green_success_900: string;
};

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
declare const TAILWIND_COLORS: {
    inherit: string;
    current: string;
    transparent: string;
    black: string;
    white: string;
    slate: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    zinc: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    stone: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    red: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    orange: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    amber: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    yellow: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    lime: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    green: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    emerald: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    teal: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    cyan: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    sky: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    indigo: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    violet: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    purple: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    fuchsia: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    pink: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
    rose: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
};

export { HS_COLORS as COLORS_HEY_SUCCESS, IOL_COLORS as COLORS_IOL, TAILWIND_COLORS as COLORS_TAILWIND, ZIGMAFY_COLORS as COLORS_ZIGMAFY, HS_COLORS, IOL_COLORS, TAILWIND_COLORS, ZIGMAFY_COLORS };
