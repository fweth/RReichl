const basePixels = Object.fromEntries(
    [1, 2, 4, 8, 16, 32, 64]
        .map((i) => [1, 2, 3, 4, 5].map((j) => [i * j, `${4 * i * j}px`]))
        .flat()
);
const baseFractions = {
    "1/8": "12.5%",
    "1/4": "25%",
    "3/8": "37.5%",
    "1/2": "50%",
    "5/8": "62.5%",
    "3/4": "75%",
    "7/8": "87.5%",
};
module.exports = {
    content: ["./src/**/*.astro"],
    theme: {
        colors: {
            beige: "#66614e",
            black: "#000",
            red: "#b75450",
        },
        fontFamily: {
            "ocr-t": "OcrT",
        },
        fontSize: {
            s: "12px",
            m: "14px",
            l: "15px",
            xl: "18px",
            xxl: "24px",
        },
        spacing: { 0: "0", ...basePixels },
    },
    extend: {
        colors: {
            beige: "#66614e",
            black: "#000",
            red: "#b75450",
        },
        margin: {
            s: "25px",
            m: "55px",
            l: "80px",
            xl: "105px",
        },
        minHeight: {
            ...basePixels,
        },
        width: baseFractions,
    },
    plugins: [],
};
