const data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [
    {
      label: "My First Dataset",
      data: [22, 31, 26, 19],
      backgroundColor: ["#000000", "#ffff00", "#aaaaaa", "#ff0000"],
    },
  ],
};
const options = {
  responsive: true,
  borderWidth: 0,
};

const plugins = [
  {
    afterUpdate: function (chart) {
      const arcs = chart.getDatasetMeta(0).data;

      arcs.forEach(function (arc) {
        arc.round = {
          x: (chart.chartArea.left + chart.chartArea.right) / 2,
          y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
          radius: (arc.outerRadius + arc.innerRadius) / 2,
          thickness: (arc.outerRadius - arc.innerRadius) / 2,
          backgroundColor: arc.options.backgroundColor,
        };
      });
    },
    afterDraw: (chart) => {
      const { ctx, canvas } = chart;

      chart.getDatasetMeta(0).data.forEach((arc) => {
        const startAngle = Math.PI / 2 - arc.startAngle;
        const endAngle = Math.PI / 2 - arc.endAngle;

        ctx.save();
        ctx.translate(arc.round.x, arc.round.y);
        ctx.fillStyle = arc.options.backgroundColor;
        ctx.beginPath();
        ctx.arc(
          arc.round.radius * Math.sin(endAngle),
          arc.round.radius * Math.cos(endAngle),
          arc.round.thickness,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });
    },
  },
];
