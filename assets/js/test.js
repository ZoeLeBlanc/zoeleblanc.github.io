// import { createScatterplot } from "../../node_modules/regl-scatterplot/dist/regl-scatterplot";

// const canvas = document.querySelector("#canvas");

// const {
//     width,
//     height
// } = canvas.getBoundingClientRect();

// const scatterplot = createScatterplot({
//     canvas,
//     width,
//     height,
//     pointSize: 5
// });

// const points = new Array(10000)
//     .fill()
//     .map(() => [-1 + Math.random() * 2, -1 + Math.random() * 2, color]);

// scatterplot.draw(points);

$.getJSON('/features_nam_congo.json', (data) =>{
    console.log(data);
    let xS = [];
    let yS = [];
    data.map((d) => {
        let point = Object.values(d);
        xS.push(point[0]);
        yS.push(point[3]);
    })
    // new roughViz.Scatter({
    //     element: '#vis0',
    //     data: {x: xS, y: yS},
    //     title: 'Iris Scatter Plot',
    //     colorVar: 'species',
    //     highlightLabel: 'species',
    //     fillWeight: 4,
    //     radius: 12,
    //     colors: ['pink', 'coral', 'skyblue'],
    //     stroke: 'black',
    //     strokeWidth: 0.4,
    //     roughness: 1,
    //     width: 400,
    //     height: 450,
    //     font: 0,
    //     xLabel: 'sepal width',
    //     yLabel: 'petal length',
    //     curbZero: false,
    // })
});
var colors = {
    'Congo and Belgrade': '#1f77b4',
    'Belgrade Only': '#d62728',
    'Congo Only': '#ff7f0e',
    'Neither Congo and Belgrade': '#2ca02c'
}

new roughViz.Scatter({
    element: '#vis0',
    data: '/features_nam.csv',
    // title: 'Iris Scatter Plot',
    x: 'value',
    y: 'congoness',
    colorVar: 'classify',
    colors: Object.values(colors),
    highlightLabel: 'term',
    fillWeight: 4,
    radius: 12,
    stroke: 'black',
    strokeWidth: 0.4,
    roughness: 1,
    width: 800,
    height: 800,
});