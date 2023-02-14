/**
 * Color Variables
 *
 * All the following variables are used to generate color tokens.
 * Changes made to these variables will be reflected throughout the library.
 */
export type Mode = 'light' | 'dark';
declare const shades: readonly [50, 100, 300, 400, 500, 750];
declare const namedShadeMap: {
    readonly Surface: 50;
    readonly Light: 100;
    readonly Bright: 300;
    readonly Primary: 400;
    readonly Dim: 500;
    readonly Active: 750;
};
declare const hues: {
    blue: [number, number, number, {
        50: [number, number, number];
    }];
    indigo: [number, number, number];
    purple: [number, number, number];
    pink: [number, number, number, {
        100: [number, number, number];
    }];
    red: [number, number, number, {
        50: [number, number, number];
        100: [number, number, number];
    }];
    orange: [number, number, number, {
        100: [number, number, number];
    }];
    yellow: [number, number, number, {
        50: [number, number, number];
        100: [number, number, number];
    }];
    green: [number, number, number, {
        50: [number, number, number];
        100: [number, number, number];
    }];
    teal: [number, number, number];
    grey: [number, number, number, {
        50: [number, number, number];
        100: [number, number, number];
        500: [number, number, number];
        750: [number, number, number];
    }];
};
declare const categories: {
    background: {
        hue: "grey";
        items: {
            primary: {
                light: string;
                dark: string;
            };
            secondary: "Surface";
        };
    };
    text: {
        hue: "grey";
        items: {
            primary: "Active";
            secondary: "Dim";
            tertiary: "Primary";
            accent: {
                light: string;
                dark: string;
            };
        };
    };
    border: {
        hue: "grey";
        items: {
            primary: "Light";
        };
    };
};
declare const gradients: {
    blue: string;
    green: string;
    red: string;
    purple: string;
    grey: string;
};
/**
 * END COLOR VARIABLES
 */
export type NamedShade = keyof typeof namedShadeMap;
export type Shade = typeof shades[number];
export type Hue = keyof typeof hues;
export type Category = keyof Categories | 'accent';
export type Gradient = keyof typeof gradients;
type Categories = typeof categories;
type CamelCaseNested<T> = (T extends object ? {
    [K in Exclude<keyof T, symbol>]: `${K}${Capitalize<CamelCaseNested<T[K]>>}`;
}[Exclude<keyof T, symbol>] : '') extends infer D ? Extract<D, string> : never;
type DotNestedCategoryKeys = CamelCaseNested<{
    [item in keyof Categories]: {
        [key in keyof Categories[item]['items']]: string;
    } & {
        '': string;
    };
}>;
type DotNestedCategories = {
    [K in DotNestedCategoryKeys]: string;
};
export declare const makeColors: (accent: Hue) => {
    light: {
        gradients: {
            accent: string;
            blue: string;
            green: string;
            red: string;
            purple: string;
            grey: string;
        };
        text: string;
        blue: string;
        indigo: string;
        purple: string;
        pink: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        teal: string;
        grey: string;
        background: string;
        accent: string;
        border: string;
        blueSurface: string;
        indigoSurface: string;
        purpleSurface: string;
        pinkSurface: string;
        redSurface: string;
        orangeSurface: string;
        yellowSurface: string;
        greenSurface: string;
        tealSurface: string;
        greySurface: string;
        accentSurface: string;
        blueLight: string;
        indigoLight: string;
        purpleLight: string;
        pinkLight: string;
        redLight: string;
        orangeLight: string;
        yellowLight: string;
        greenLight: string;
        tealLight: string;
        greyLight: string;
        accentLight: string;
        blueBright: string;
        indigoBright: string;
        purpleBright: string;
        pinkBright: string;
        redBright: string;
        orangeBright: string;
        yellowBright: string;
        greenBright: string;
        tealBright: string;
        greyBright: string;
        accentBright: string;
        bluePrimary: string;
        indigoPrimary: string;
        purplePrimary: string;
        pinkPrimary: string;
        redPrimary: string;
        orangePrimary: string;
        yellowPrimary: string;
        greenPrimary: string;
        tealPrimary: string;
        greyPrimary: string;
        accentPrimary: string;
        blueDim: string;
        indigoDim: string;
        purpleDim: string;
        pinkDim: string;
        redDim: string;
        orangeDim: string;
        yellowDim: string;
        greenDim: string;
        tealDim: string;
        greyDim: string;
        accentDim: string;
        blueActive: string;
        indigoActive: string;
        purpleActive: string;
        pinkActive: string;
        redActive: string;
        orangeActive: string;
        yellowActive: string;
        greenActive: string;
        tealActive: string;
        greyActive: string;
        accentActive: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        textAccent: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        borderPrimary: string;
        raw: Omit<Omit<{
            blueSurface: string;
            indigoSurface: string;
            purpleSurface: string;
            pinkSurface: string;
            redSurface: string;
            orangeSurface: string;
            yellowSurface: string;
            greenSurface: string;
            tealSurface: string;
            greySurface: string;
            accentSurface: string;
            blueLight: string;
            indigoLight: string;
            purpleLight: string;
            pinkLight: string;
            redLight: string;
            orangeLight: string;
            yellowLight: string;
            greenLight: string;
            tealLight: string;
            greyLight: string;
            accentLight: string;
            blueBright: string;
            indigoBright: string;
            purpleBright: string;
            pinkBright: string;
            redBright: string;
            orangeBright: string;
            yellowBright: string;
            greenBright: string;
            tealBright: string;
            greyBright: string;
            accentBright: string;
            bluePrimary: string;
            indigoPrimary: string;
            purplePrimary: string;
            pinkPrimary: string;
            redPrimary: string;
            orangePrimary: string;
            yellowPrimary: string;
            greenPrimary: string;
            tealPrimary: string;
            greyPrimary: string;
            accentPrimary: string;
            blueDim: string;
            indigoDim: string;
            purpleDim: string;
            pinkDim: string;
            redDim: string;
            orangeDim: string;
            yellowDim: string;
            greenDim: string;
            tealDim: string;
            greyDim: string;
            accentDim: string;
            blueActive: string;
            indigoActive: string;
            purpleActive: string;
            pinkActive: string;
            redActive: string;
            orangeActive: string;
            yellowActive: string;
            greenActive: string;
            tealActive: string;
            greyActive: string;
            accentActive: string;
        } & {
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            orange: string;
            yellow: string;
            green: string;
            teal: string;
            grey: string;
            accent: string;
        }, "raw"> & {
            raw: Omit<{
                blueSurface: string;
                indigoSurface: string;
                purpleSurface: string;
                pinkSurface: string;
                redSurface: string;
                orangeSurface: string;
                yellowSurface: string;
                greenSurface: string;
                tealSurface: string;
                greySurface: string;
                accentSurface: string;
                blueLight: string;
                indigoLight: string;
                purpleLight: string;
                pinkLight: string;
                redLight: string;
                orangeLight: string;
                yellowLight: string;
                greenLight: string;
                tealLight: string;
                greyLight: string;
                accentLight: string;
                blueBright: string;
                indigoBright: string;
                purpleBright: string;
                pinkBright: string;
                redBright: string;
                orangeBright: string;
                yellowBright: string;
                greenBright: string;
                tealBright: string;
                greyBright: string;
                accentBright: string;
                bluePrimary: string;
                indigoPrimary: string;
                purplePrimary: string;
                pinkPrimary: string;
                redPrimary: string;
                orangePrimary: string;
                yellowPrimary: string;
                greenPrimary: string;
                tealPrimary: string;
                greyPrimary: string;
                accentPrimary: string;
                blueDim: string;
                indigoDim: string;
                purpleDim: string;
                pinkDim: string;
                redDim: string;
                orangeDim: string;
                yellowDim: string;
                greenDim: string;
                tealDim: string;
                greyDim: string;
                accentDim: string;
                blueActive: string;
                indigoActive: string;
                purpleActive: string;
                pinkActive: string;
                redActive: string;
                orangeActive: string;
                yellowActive: string;
                greenActive: string;
                tealActive: string;
                greyActive: string;
                accentActive: string;
            } & {
                blue: string;
                indigo: string;
                purple: string;
                pink: string;
                red: string;
                orange: string;
                yellow: string;
                green: string;
                teal: string;
                grey: string;
                accent: string;
            }, "raw">;
        } & Omit<DotNestedCategories, "raw"> & {
            raw: Omit<DotNestedCategories, "raw">;
        }, "raw">;
    };
    dark: {
        gradients: {
            accent: string;
            blue: string;
            green: string;
            red: string;
            purple: string;
            grey: string;
        };
        text: string;
        blue: string;
        indigo: string;
        purple: string;
        pink: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        teal: string;
        grey: string;
        background: string;
        accent: string;
        border: string;
        blueSurface: string;
        indigoSurface: string;
        purpleSurface: string;
        pinkSurface: string;
        redSurface: string;
        orangeSurface: string;
        yellowSurface: string;
        greenSurface: string;
        tealSurface: string;
        greySurface: string;
        accentSurface: string;
        blueLight: string;
        indigoLight: string;
        purpleLight: string;
        pinkLight: string;
        redLight: string;
        orangeLight: string;
        yellowLight: string;
        greenLight: string;
        tealLight: string;
        greyLight: string;
        accentLight: string;
        blueBright: string;
        indigoBright: string;
        purpleBright: string;
        pinkBright: string;
        redBright: string;
        orangeBright: string;
        yellowBright: string;
        greenBright: string;
        tealBright: string;
        greyBright: string;
        accentBright: string;
        bluePrimary: string;
        indigoPrimary: string;
        purplePrimary: string;
        pinkPrimary: string;
        redPrimary: string;
        orangePrimary: string;
        yellowPrimary: string;
        greenPrimary: string;
        tealPrimary: string;
        greyPrimary: string;
        accentPrimary: string;
        blueDim: string;
        indigoDim: string;
        purpleDim: string;
        pinkDim: string;
        redDim: string;
        orangeDim: string;
        yellowDim: string;
        greenDim: string;
        tealDim: string;
        greyDim: string;
        accentDim: string;
        blueActive: string;
        indigoActive: string;
        purpleActive: string;
        pinkActive: string;
        redActive: string;
        orangeActive: string;
        yellowActive: string;
        greenActive: string;
        tealActive: string;
        greyActive: string;
        accentActive: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        textAccent: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        borderPrimary: string;
        raw: Omit<Omit<{
            blueSurface: string;
            indigoSurface: string;
            purpleSurface: string;
            pinkSurface: string;
            redSurface: string;
            orangeSurface: string;
            yellowSurface: string;
            greenSurface: string;
            tealSurface: string;
            greySurface: string;
            accentSurface: string;
            blueLight: string;
            indigoLight: string;
            purpleLight: string;
            pinkLight: string;
            redLight: string;
            orangeLight: string;
            yellowLight: string;
            greenLight: string;
            tealLight: string;
            greyLight: string;
            accentLight: string;
            blueBright: string;
            indigoBright: string;
            purpleBright: string;
            pinkBright: string;
            redBright: string;
            orangeBright: string;
            yellowBright: string;
            greenBright: string;
            tealBright: string;
            greyBright: string;
            accentBright: string;
            bluePrimary: string;
            indigoPrimary: string;
            purplePrimary: string;
            pinkPrimary: string;
            redPrimary: string;
            orangePrimary: string;
            yellowPrimary: string;
            greenPrimary: string;
            tealPrimary: string;
            greyPrimary: string;
            accentPrimary: string;
            blueDim: string;
            indigoDim: string;
            purpleDim: string;
            pinkDim: string;
            redDim: string;
            orangeDim: string;
            yellowDim: string;
            greenDim: string;
            tealDim: string;
            greyDim: string;
            accentDim: string;
            blueActive: string;
            indigoActive: string;
            purpleActive: string;
            pinkActive: string;
            redActive: string;
            orangeActive: string;
            yellowActive: string;
            greenActive: string;
            tealActive: string;
            greyActive: string;
            accentActive: string;
        } & {
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            orange: string;
            yellow: string;
            green: string;
            teal: string;
            grey: string;
            accent: string;
        }, "raw"> & {
            raw: Omit<{
                blueSurface: string;
                indigoSurface: string;
                purpleSurface: string;
                pinkSurface: string;
                redSurface: string;
                orangeSurface: string;
                yellowSurface: string;
                greenSurface: string;
                tealSurface: string;
                greySurface: string;
                accentSurface: string;
                blueLight: string;
                indigoLight: string;
                purpleLight: string;
                pinkLight: string;
                redLight: string;
                orangeLight: string;
                yellowLight: string;
                greenLight: string;
                tealLight: string;
                greyLight: string;
                accentLight: string;
                blueBright: string;
                indigoBright: string;
                purpleBright: string;
                pinkBright: string;
                redBright: string;
                orangeBright: string;
                yellowBright: string;
                greenBright: string;
                tealBright: string;
                greyBright: string;
                accentBright: string;
                bluePrimary: string;
                indigoPrimary: string;
                purplePrimary: string;
                pinkPrimary: string;
                redPrimary: string;
                orangePrimary: string;
                yellowPrimary: string;
                greenPrimary: string;
                tealPrimary: string;
                greyPrimary: string;
                accentPrimary: string;
                blueDim: string;
                indigoDim: string;
                purpleDim: string;
                pinkDim: string;
                redDim: string;
                orangeDim: string;
                yellowDim: string;
                greenDim: string;
                tealDim: string;
                greyDim: string;
                accentDim: string;
                blueActive: string;
                indigoActive: string;
                purpleActive: string;
                pinkActive: string;
                redActive: string;
                orangeActive: string;
                yellowActive: string;
                greenActive: string;
                tealActive: string;
                greyActive: string;
                accentActive: string;
            } & {
                blue: string;
                indigo: string;
                purple: string;
                pink: string;
                red: string;
                orange: string;
                yellow: string;
                green: string;
                teal: string;
                grey: string;
                accent: string;
            }, "raw">;
        } & Omit<DotNestedCategories, "raw"> & {
            raw: Omit<DotNestedCategories, "raw">;
        }, "raw">;
    };
};
export declare const colors: {
    light: {
        gradients: {
            accent: string;
            blue: string;
            green: string;
            red: string;
            purple: string;
            grey: string;
        };
        text: string;
        blue: string;
        indigo: string;
        purple: string;
        pink: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        teal: string;
        grey: string;
        background: string;
        accent: string;
        border: string;
        blueSurface: string;
        indigoSurface: string;
        purpleSurface: string;
        pinkSurface: string;
        redSurface: string;
        orangeSurface: string;
        yellowSurface: string;
        greenSurface: string;
        tealSurface: string;
        greySurface: string;
        accentSurface: string;
        blueLight: string;
        indigoLight: string;
        purpleLight: string;
        pinkLight: string;
        redLight: string;
        orangeLight: string;
        yellowLight: string;
        greenLight: string;
        tealLight: string;
        greyLight: string;
        accentLight: string;
        blueBright: string;
        indigoBright: string;
        purpleBright: string;
        pinkBright: string;
        redBright: string;
        orangeBright: string;
        yellowBright: string;
        greenBright: string;
        tealBright: string;
        greyBright: string;
        accentBright: string;
        bluePrimary: string;
        indigoPrimary: string;
        purplePrimary: string;
        pinkPrimary: string;
        redPrimary: string;
        orangePrimary: string;
        yellowPrimary: string;
        greenPrimary: string;
        tealPrimary: string;
        greyPrimary: string;
        accentPrimary: string;
        blueDim: string;
        indigoDim: string;
        purpleDim: string;
        pinkDim: string;
        redDim: string;
        orangeDim: string;
        yellowDim: string;
        greenDim: string;
        tealDim: string;
        greyDim: string;
        accentDim: string;
        blueActive: string;
        indigoActive: string;
        purpleActive: string;
        pinkActive: string;
        redActive: string;
        orangeActive: string;
        yellowActive: string;
        greenActive: string;
        tealActive: string;
        greyActive: string;
        accentActive: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        textAccent: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        borderPrimary: string;
        raw: Omit<Omit<{
            blueSurface: string;
            indigoSurface: string;
            purpleSurface: string;
            pinkSurface: string;
            redSurface: string;
            orangeSurface: string;
            yellowSurface: string;
            greenSurface: string;
            tealSurface: string;
            greySurface: string;
            accentSurface: string;
            blueLight: string;
            indigoLight: string;
            purpleLight: string;
            pinkLight: string;
            redLight: string;
            orangeLight: string;
            yellowLight: string;
            greenLight: string;
            tealLight: string;
            greyLight: string;
            accentLight: string;
            blueBright: string;
            indigoBright: string;
            purpleBright: string;
            pinkBright: string;
            redBright: string;
            orangeBright: string;
            yellowBright: string;
            greenBright: string;
            tealBright: string;
            greyBright: string;
            accentBright: string;
            bluePrimary: string;
            indigoPrimary: string;
            purplePrimary: string;
            pinkPrimary: string;
            redPrimary: string;
            orangePrimary: string;
            yellowPrimary: string;
            greenPrimary: string;
            tealPrimary: string;
            greyPrimary: string;
            accentPrimary: string;
            blueDim: string;
            indigoDim: string;
            purpleDim: string;
            pinkDim: string;
            redDim: string;
            orangeDim: string;
            yellowDim: string;
            greenDim: string;
            tealDim: string;
            greyDim: string;
            accentDim: string;
            blueActive: string;
            indigoActive: string;
            purpleActive: string;
            pinkActive: string;
            redActive: string;
            orangeActive: string;
            yellowActive: string;
            greenActive: string;
            tealActive: string;
            greyActive: string;
            accentActive: string;
        } & {
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            orange: string;
            yellow: string;
            green: string;
            teal: string;
            grey: string;
            accent: string;
        }, "raw"> & {
            raw: Omit<{
                blueSurface: string;
                indigoSurface: string;
                purpleSurface: string;
                pinkSurface: string;
                redSurface: string;
                orangeSurface: string;
                yellowSurface: string;
                greenSurface: string;
                tealSurface: string;
                greySurface: string;
                accentSurface: string;
                blueLight: string;
                indigoLight: string;
                purpleLight: string;
                pinkLight: string;
                redLight: string;
                orangeLight: string;
                yellowLight: string;
                greenLight: string;
                tealLight: string;
                greyLight: string;
                accentLight: string;
                blueBright: string;
                indigoBright: string;
                purpleBright: string;
                pinkBright: string;
                redBright: string;
                orangeBright: string;
                yellowBright: string;
                greenBright: string;
                tealBright: string;
                greyBright: string;
                accentBright: string;
                bluePrimary: string;
                indigoPrimary: string;
                purplePrimary: string;
                pinkPrimary: string;
                redPrimary: string;
                orangePrimary: string;
                yellowPrimary: string;
                greenPrimary: string;
                tealPrimary: string;
                greyPrimary: string;
                accentPrimary: string;
                blueDim: string;
                indigoDim: string;
                purpleDim: string;
                pinkDim: string;
                redDim: string;
                orangeDim: string;
                yellowDim: string;
                greenDim: string;
                tealDim: string;
                greyDim: string;
                accentDim: string;
                blueActive: string;
                indigoActive: string;
                purpleActive: string;
                pinkActive: string;
                redActive: string;
                orangeActive: string;
                yellowActive: string;
                greenActive: string;
                tealActive: string;
                greyActive: string;
                accentActive: string;
            } & {
                blue: string;
                indigo: string;
                purple: string;
                pink: string;
                red: string;
                orange: string;
                yellow: string;
                green: string;
                teal: string;
                grey: string;
                accent: string;
            }, "raw">;
        } & Omit<DotNestedCategories, "raw"> & {
            raw: Omit<DotNestedCategories, "raw">;
        }, "raw">;
    };
    dark: {
        gradients: {
            accent: string;
            blue: string;
            green: string;
            red: string;
            purple: string;
            grey: string;
        };
        text: string;
        blue: string;
        indigo: string;
        purple: string;
        pink: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        teal: string;
        grey: string;
        background: string;
        accent: string;
        border: string;
        blueSurface: string;
        indigoSurface: string;
        purpleSurface: string;
        pinkSurface: string;
        redSurface: string;
        orangeSurface: string;
        yellowSurface: string;
        greenSurface: string;
        tealSurface: string;
        greySurface: string;
        accentSurface: string;
        blueLight: string;
        indigoLight: string;
        purpleLight: string;
        pinkLight: string;
        redLight: string;
        orangeLight: string;
        yellowLight: string;
        greenLight: string;
        tealLight: string;
        greyLight: string;
        accentLight: string;
        blueBright: string;
        indigoBright: string;
        purpleBright: string;
        pinkBright: string;
        redBright: string;
        orangeBright: string;
        yellowBright: string;
        greenBright: string;
        tealBright: string;
        greyBright: string;
        accentBright: string;
        bluePrimary: string;
        indigoPrimary: string;
        purplePrimary: string;
        pinkPrimary: string;
        redPrimary: string;
        orangePrimary: string;
        yellowPrimary: string;
        greenPrimary: string;
        tealPrimary: string;
        greyPrimary: string;
        accentPrimary: string;
        blueDim: string;
        indigoDim: string;
        purpleDim: string;
        pinkDim: string;
        redDim: string;
        orangeDim: string;
        yellowDim: string;
        greenDim: string;
        tealDim: string;
        greyDim: string;
        accentDim: string;
        blueActive: string;
        indigoActive: string;
        purpleActive: string;
        pinkActive: string;
        redActive: string;
        orangeActive: string;
        yellowActive: string;
        greenActive: string;
        tealActive: string;
        greyActive: string;
        accentActive: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        textAccent: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
        borderPrimary: string;
        raw: Omit<Omit<{
            blueSurface: string;
            indigoSurface: string;
            purpleSurface: string;
            pinkSurface: string;
            redSurface: string;
            orangeSurface: string;
            yellowSurface: string;
            greenSurface: string;
            tealSurface: string;
            greySurface: string;
            accentSurface: string;
            blueLight: string;
            indigoLight: string;
            purpleLight: string;
            pinkLight: string;
            redLight: string;
            orangeLight: string;
            yellowLight: string;
            greenLight: string;
            tealLight: string;
            greyLight: string;
            accentLight: string;
            blueBright: string;
            indigoBright: string;
            purpleBright: string;
            pinkBright: string;
            redBright: string;
            orangeBright: string;
            yellowBright: string;
            greenBright: string;
            tealBright: string;
            greyBright: string;
            accentBright: string;
            bluePrimary: string;
            indigoPrimary: string;
            purplePrimary: string;
            pinkPrimary: string;
            redPrimary: string;
            orangePrimary: string;
            yellowPrimary: string;
            greenPrimary: string;
            tealPrimary: string;
            greyPrimary: string;
            accentPrimary: string;
            blueDim: string;
            indigoDim: string;
            purpleDim: string;
            pinkDim: string;
            redDim: string;
            orangeDim: string;
            yellowDim: string;
            greenDim: string;
            tealDim: string;
            greyDim: string;
            accentDim: string;
            blueActive: string;
            indigoActive: string;
            purpleActive: string;
            pinkActive: string;
            redActive: string;
            orangeActive: string;
            yellowActive: string;
            greenActive: string;
            tealActive: string;
            greyActive: string;
            accentActive: string;
        } & {
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            orange: string;
            yellow: string;
            green: string;
            teal: string;
            grey: string;
            accent: string;
        }, "raw"> & {
            raw: Omit<{
                blueSurface: string;
                indigoSurface: string;
                purpleSurface: string;
                pinkSurface: string;
                redSurface: string;
                orangeSurface: string;
                yellowSurface: string;
                greenSurface: string;
                tealSurface: string;
                greySurface: string;
                accentSurface: string;
                blueLight: string;
                indigoLight: string;
                purpleLight: string;
                pinkLight: string;
                redLight: string;
                orangeLight: string;
                yellowLight: string;
                greenLight: string;
                tealLight: string;
                greyLight: string;
                accentLight: string;
                blueBright: string;
                indigoBright: string;
                purpleBright: string;
                pinkBright: string;
                redBright: string;
                orangeBright: string;
                yellowBright: string;
                greenBright: string;
                tealBright: string;
                greyBright: string;
                accentBright: string;
                bluePrimary: string;
                indigoPrimary: string;
                purplePrimary: string;
                pinkPrimary: string;
                redPrimary: string;
                orangePrimary: string;
                yellowPrimary: string;
                greenPrimary: string;
                tealPrimary: string;
                greyPrimary: string;
                accentPrimary: string;
                blueDim: string;
                indigoDim: string;
                purpleDim: string;
                pinkDim: string;
                redDim: string;
                orangeDim: string;
                yellowDim: string;
                greenDim: string;
                tealDim: string;
                greyDim: string;
                accentDim: string;
                blueActive: string;
                indigoActive: string;
                purpleActive: string;
                pinkActive: string;
                redActive: string;
                orangeActive: string;
                yellowActive: string;
                greenActive: string;
                tealActive: string;
                greyActive: string;
                accentActive: string;
            } & {
                blue: string;
                indigo: string;
                purple: string;
                pink: string;
                red: string;
                orange: string;
                yellow: string;
                green: string;
                teal: string;
                grey: string;
                accent: string;
            }, "raw">;
        } & Omit<DotNestedCategories, "raw"> & {
            raw: Omit<DotNestedCategories, "raw">;
        }, "raw">;
    };
};
export {};
