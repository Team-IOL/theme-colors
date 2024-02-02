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
declare const ZIGMAFY_COLORS: object;

export { HS_COLORS, IOL_COLORS, ZIGMAFY_COLORS };
