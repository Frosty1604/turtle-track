import { ApexOptions } from 'ng-apexcharts';

export const defaultChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['oklch(var(--a))', 'oklch(var(--p))'],
  xaxis: {
    type: 'datetime',
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      bottom: 0,
    },
  },
  legend: {
    show: true,
    labels: {
      colors: 'oklch(var(--bc) / 1)',
    },
    position: 'top',
    itemMargin: {
      vertical: 15,
    },
    markers: {
      offsetX: -2.5,
      strokeWidth: 0,
    },
  },
};
