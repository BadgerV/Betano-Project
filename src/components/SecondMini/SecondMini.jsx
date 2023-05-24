import "./secondMini.css";
import { PieChart, Pie, Cell } from "recharts";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const SecondMini = () => {
  const RADIAN = Math.PI / 180;
  const data = [
    { name: "A", value: 30, color: "#0C2340" },
    { name: "B", value: 20, color: "#0C2340" },
    { name: "C", value: 50, color: "green" },
  ];

  const data1 = [
    {
      name: 'January',
      pv: 800,
    },
    {
      name: 'February',
      pv: 967,
    },
    {
      name: 'March',
      pv: 1098,
    },
    {
      name: 'April',
      pv: 1200,
    },
    {
      name: 'May',
      pv: 1108,
    },
    {
      name: 'June',
      pv: 680,
    },
  ];
  

  const cx = 150;
  const cy = 200;
  const iR = 70;
  const oR = 130;
  const value = 90;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const percentage = value / total;

    const angle = 180 - percentage * 180;
    const length = iR + (oR - iR) / 2;
    const sin = Math.sin(-RADIAN * angle);
    const cos = Math.cos(-RADIAN * angle);
    const x0 = cx;
    const y0 = cy;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return (
      <>
        <line x1={x0} y1={y0} x2={xp} y2={yp} stroke={color} strokeWidth={2} />
        <circle cx={x0} cy={y0} r={5} fill={color} stroke="none" />
      </>
    );
  };

  return (
    <div className="secondmini">
      <div className="secondmini-top">
        <span className="secondmini-top_text">Avg Orders Today</span>
        <div
          className="secondmini-speedometer"
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PieChart height={350} width={300}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"
              sectorBorderColor="#000"
              sectorBorderWidth={1}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <text x={45} y={225} textAnchor="start" fill="grey" fontSize="1px">
              {`${data[0].value}`}
            </text>
            <text x={265} y={225} textAnchor="end" fill="grey" fontSize="1px">
              {`${data[data.length - 1].value}`}
            </text>

            {needle(value, data, cx, cy, iR, oR, "#ffffff")}
          </PieChart>
        </div>
        <span className="secondmini-top_price">
          <span>$</span>29
        </span>
      </div>
      <div className="secondmini-bottom">
      <ResponsiveContainer width={350} height={300}>
      <ComposedChart
          layout="vertical"
          data={data1}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeOpacity={0} />
          <XAxis type="number" tick={{ dy: 15, fill: 'white' }} hide/>
          <YAxis dataKey="name" type="category" scale="band" tick={{ dy: 15, fill: 'white' }}/>
          <Tooltip />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SecondMini;
