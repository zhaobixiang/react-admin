import CountUp from 'react-countup';
import { Statistic } from 'antd';
import type { valueType, Formatter } from 'antd/es/statistic/utils';

interface Props {
  className?: string;
  title?: string;
  value: string | number;
  valueStyle?: any;
  prefix?: string;
}

function CountTo(props: Props) {
  const { title, value, valueStyle, prefix } = props;
  const formatter: Formatter = (value: valueType) => <CountUp end={value} separator=',' />;

  return (
    <Statistic
      title={title}
      valueStyle={valueStyle}
      value={value}
      prefix={prefix}
      formatter={formatter}
    />
  );
}

export default CountTo;
