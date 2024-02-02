/**
 * Defines the color palette for the ZIGMAFY UI theme, including primary, secondary, 
 * and various shades for different UI elements like backgrounds, text, and borders. 
 * Each color is represented in HEX format and is intended for specific use cases to ensure 
 * a cohesive look and feel across the UI.
 * 
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

const ZIGMAFY_COLORS = {
    primary_main: "#1E293B",
    primary_dark: "#0F172A",
    primary_light: "#E2E8F0",
    primary_contrast: "#F8FAFC",
    
    secondary_main: "#D1D5DB",
    secondary_dark: "#6B7280",
    secondary_light: "#F3F4F6",
    secondary_contrast: "#1F2937",

    slate_primary_50: "#F8FAFC",
    slate_primary_100: "#F1F5F9",
    slate_primary_200: "#E2E8F0",
    slate_primary_300: "#CBD5E1",
    slate_primary_400: "#94A3B8",
    slate_primary_500: "#64748B",
    slate_primary_600: "#475569",
    slate_primary_700: "#334155",
    slate_primary_800: "#1E293B",
    slate_primary_900: "#0F172A",

    neutral_50: "#FAFAFA",
    neutral_100: "#F5F5F5",
    neutral_200: "#E5E5E5",
    neutral_300: "#D4D4D4",
    neutral_400: "#A3A3A3",
    neutral_500: "#737373",
    neutral_600: "#525252",
    neutral_700: "#404040",
    neutral_800: "#262626",
    neutral_900: "#171717",

    gray_secondary_50: "#F9FAFB",
    gray_secondary_100: "#F3F4F6",
    gray_secondary_200: "#E5E7EB",
    gray_secondary_300: "#D1D5DB",
    gray_secondary_400: "#9CA3AF",
    gray_secondary_500: "#6B7280",
    gray_secondary_600: "#4B5563",
    gray_secondary_700: "#374151",
    gray_secondary_800: "#1F2937",
    gray_secondary_900: "#111827",

    stone_info_50: "#FAFAF9",
    stone_info_100: "#F5F5F4",
    stone_info_200: "#E7E5E4",
    stone_info_300: "#D6D3D1",
    stone_info_400: "#A8A29E",
    stone_info_500: "#78716C",
    stone_info_600: "#57534E",
    stone_info_700: "#44403C",
    stone_info_800: "#292524",
    stone_info_900: "#1C1917",

    red_error_50: "#FEF2F2",
    red_error_100: "#FEE2E2",
    red_error_200: "#FECACA",
    red_error_300: "#FCA5A5",
    red_error_400: "#F87171",
    red_error_500: "#EF4444",
    red_error_600: "#DC2626",
    red_error_700: "#B91C1C",
    red_error_800: "#991B1B",
    red_error_900: "#7F1D1D",

    yellow_warning_50: "#FFFBEB",
    yellow_warning_100: "#FEF3C7",
    yellow_warning_200: "#FDE68A",
    yellow_warning_300: "#FCD34D",
    yellow_warning_400: "#FBBF24",
    yellow_warning_500: "#F59E0B",
    yellow_warning_600: "#D97706",
    yellow_warning_700: "#B45309",
    yellow_warning_800: "#92400E",
    yellow_warning_900: "#78350F",

    green_success_50: "#F0FDF4",
    green_success_100: "#DCFCE7",
    green_success_200: "#BBF7D0",
    green_success_300: "#86EFAC",
    green_success_400: "#4ADE80",
    green_success_500: "#22C55E",
    green_success_600: "#16A34A",
    green_success_700: "#15803D",
    green_success_800: "#166534",
    green_success_900: "#14532D",
}

export default ZIGMAFY_COLORS;