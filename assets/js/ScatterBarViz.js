// Create data
var colors = {
    'Congo and Belgrade': '#1f77b4',
    'Belgrade Only': '#d62728',
    'Congo Only': '#ff7f0e',
    'Neither Congo and Belgrade': '#2ca02c'
}
d3.json('/features_nam_congo.json', function (data) {
    data = data.slice(0, 2000);
    var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 30
        },
        width = 900 - margin.left - margin.right,
        height = 480 - margin.top - margin.bottom;
    var x = d3.scaleLinear()
        .range([0, width])
        .nice();
    var y = d3.scaleLinear()
        .range([height, 0]);
    var xAxis = d3.axisBottom(x).ticks(12),
        yAxis = d3.axisLeft(y).ticks(12 * height / width);
    var brush = d3.brush().extent([
        [0, 0],
        [width, height]
    ]).on("end", brushended);
    var idleTimeout,
        idleDelay = 350;
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr('pointer-events', 'all')
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);
    var xExtent = d3.extent(data, function (d) {
        return d.x;
    });
    var yExtent = d3.extent(data, function (d) {
        return d.y;
    });
    x.domain(d3.extent(data, function (d) {
        return d.x;
    })).nice();
    y.domain(d3.extent(data, function (d) {
        return d.y;
    })).nice();
    // x axis
    svg.append("g")
        .attr("class", "x axis")
        .attr('id', "axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    svg.append("text")
        .style("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 8)
        .text("X Label");
    // y axis
    svg.append("g")
        .attr("class", "y axis")
        .attr('id', "axis--y")
        .call(yAxis);
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "1em")
        .style("text-anchor", "end")
        .text("Y Label");
    var zoomPan = d3.zoom()
        .extent([
            [0, 0],
            [width, height]
        ])
        .scaleExtent([1, 8])
        .on("zoom", zoomed);
    var switchToggle = (toggleStatus) => {
        if (toggleStatus) {
            if (d3.select(".zoom").empty() == false) {
                d3.select(".zoom").remove()
            }
            svg.insert("g", "#axis--y")
                .attr("clip-path", "url(#clip)")
                .attr("class", "brush")
                .call(brush)
                .call(brush.move, x.range());
        } else {
            if (d3.select(".brush").empty() == false) {
                d3.select(".brush").remove()
            }
            svg.insert('rect', "#axis--y")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .attr("clip-path", "url(#clip)")
                .attr("class", "zoom")
                .attr('width', width)
                .attr('height', height)
                .style('fill', 'none')
                .style('pointer-events', 'all')
                .call(zoomPan);
        }
    }
    switchToggle(false);
    var scatter = svg.append("g").classed("dots", true)
        .attr("id", "scatterplot")
        .attr("clip-path", "url(#clip)");
    var labels = scatter.selectAll('text')
        .data(data)
        .enter().append('text')
        .attr("class", "labels")
        .attr('x', d => x(d.x))
        .attr('y', d => y(d.y))
        .attr('dx', '.71em')
        .attr('dy', '.35em')
        .text((d) => d.texts05 ? d.term : '');

    function clicked(d, i) {
        if (d3.event.defaultPrevented) return; // zoomed
        console.log(d3.select(this));
        d3.select(this).transition()
            .style('stroke', 'black')
            .style('stroke-width', '3px');
    }
    var points = scatter.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 4)
        .attr("cx", function (d) {
            return x(d.x);
        })
        .attr("cy", function (d) {
            return y(d.y);
        })
        .attr("opacity", 0.5)
        .style("fill", d => colors[d.color]);
    points.on('click', clicked);

    function brushended() {
        var s = d3.event.selection;
        console.log('s', s)
        if (!s) {
            if (!idleTimeout) return idleTimeout = setTimeout(idled, idleDelay);
            x.domain(d3.extent(data, function (d) {
                return d.x;
            })).nice();
            y.domain(d3.extent(data, function (d) {
                return d.y;
            })).nice();
        } else {
            x.domain([s[0][0], s[1][0]].map(x.invert, x));
            y.domain([s[1][1], s[0][1]].map(y.invert, y));
            d3.select(".brush").call(brush.move, null);
        }
        zoom();
    }

    function idled() {
        idleTimeout = null;
    }

    function showLabels() {
        var y_scale = y.domain();
        var x_scale = x.domain();
        var testData = data.filter((d) => {
            if ((y_scale[0] < d.y && d.y < y_scale[1]) && (x_scale[0] < d.x && d.x < x_scale[1])) {
                return d;
            }
        });
        var newData = testData.map((data, index) => {
            if (index == 0)
                return Object.assign({}, data, {
                    show: false
                })
            return data
        });
        labels.data(newData);
        points.data(newData);
        labels.exit().remove();
        points.exit().remove();
        labels.enter().append('text')
            .attr("class", "labels")
            .attr('x', d => x(d.x))
            .attr('y', d => y(d.y))
            .attr('dx', '.71em')
            .attr('dy', '.35em')
            .text((d) => {
                if (d.show == true) {
                    return d.term
                } else {
                    return ''
                }
            });
        points.enter().append("circle")
            .attr("class", "dot")
            .attr("r", 4)
            .attr("cx", function (d) {
                return x(d.x);
            })
            .attr("cy", function (d) {
                return y(d.y);
            })
            .attr("opacity", 0.5)
            .style("fill", d => colors[d.color]);
    }

    function zoom() {
        var t = scatter.transition().duration(750);
        svg.select("#axis--x").transition(t).call(xAxis);
        svg.select("#axis--y").transition(t).call(yAxis);
        scatter.selectAll("circle").transition(t)
            .attr("cx", function (d) {
                return x(d.x);
            })
            .attr("cy", function (d) {
                return y(d.y);
            });
        scatter.selectAll("text").transition(t)
            .attr("x", function (d) {
                return x(d.x);
            })
            .attr("y", function (d) {
                return y(d.y);
            });
        // showLabels();
    }

    function zoomed() {
        // scatter.attr("transform", d3.event.transform);
        var t = scatter.transition().duration(300);
        var new_xScale = d3.event.transform.rescaleX(x);
        var new_yScale = d3.event.transform.rescaleY(y);
        svg.select("#axis--x").transition(t).call(xAxis.scale(new_xScale));
        svg.select("#axis--y").transition(t).call(yAxis.scale(new_yScale));
        scatter.selectAll(".labels").transition(t)
            .attr("x", function (d) {
                return new_xScale(d.x);
            })
            .attr("y", function (d) {
                return new_yScale(d.y);
            });
        scatter.selectAll("circle").transition(t)
            .attr("cx", function (d) {
                return new_xScale(d.x);
            })
            .attr("cy", function (d) {
                return new_yScale(d.y);
            });
    }
    $("#togBtn").on('change', function () {
        if ($(this).is(':checked')) {
            switchStatus = $(this).is(':checked');
            switchToggle(switchStatus); // To verify
        } else {
            switchStatus = $(this).is(':checked');
            switchToggle(switchStatus); // To verify
        }
    });
});