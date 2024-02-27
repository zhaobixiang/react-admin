import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface Props {
  options: object;
  width?: number | string;
  height?: number | string;
}

function Chart(props: Props) {
  const chartRef: any = useRef(null);
  let chart: any = null;

  const style = {
    width: props.width ?? '100%',
    height: props.height ?? '300px',
  };

  // 定义渲染函数
  function render() {
    chart = echarts.getInstanceByDom(chartRef.current);

    if (!chart) {
      chart = echarts.init(chartRef.current);
    }

    chart.setOption(props.options);
  }

  const resize = () => {
    if (chart) {
      chart.resize();
    }
  };

  useEffect(() => {
    render();
    window.addEventListener('resize', resize);

    return () => {
      if (chart) {
        chart.resize();
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <div style={style} ref={chartRef} />;
}

export default Chart;
