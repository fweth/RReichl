const baseSpacing = Object.fromEntries(
    [1, 2, 4, 8, 16, 32, 64]
        .map((i) => [1, 2, 3, 4, 5].map((j) => [i * j, `${4 * i * j}px`]))
        .flat()
);
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
        margin: {
            ...baseSpacing,
            s: "25px",
            m: "55px",
            l: "80px",
            xl: "105px",
        },
        minHeight: {
            ...baseSpacing
        }
        spacing: { 0: "0", ...baseSpacing },
    },
    plugins: [],
};
