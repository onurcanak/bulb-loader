document.addEventListener("DOMContentLoaded", function(e) {

    function draw(isDrawForward){
        d3.select('.bulb-vector')
            .attr('stroke-dashoffset', isDrawForward ? 1000 : 740)
            .transition()
            .ease(d3.easeLinear)
            .duration(750)
                .attr('stroke-dashoffset', isDrawForward ? 740 : 1000)

        d3.select('.circle-vector')
            .attr('cx', '50%')
            .attr('cy', '30%')
            .attr('fill', 'yellow')
            .attr('opacity', 0.5)
            .attr('r', isDrawForward ? 0 : 13)
            .transition()
            .ease(d3.easeBounce)
            .duration(1250)
                .attr('r', isDrawForward ? 13 : 0)
    }

    var isForward = true
    draw(isForward)

    setInterval(() => {
        isForward = !isForward
        draw(isForward)
    }, 1500);
    
});