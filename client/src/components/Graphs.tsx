import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { time: "12PM", temperature: 75, humidity: 60 },
  { time: "1PM", temperature: 76, humidity: 62 },
  { time: "2PM", temperature: 78, humidity: 65 },
];

interface GraphProps {
  type: "temperature" | "humidity";
}

const Graphs: React.FC<GraphProps> = ({ type }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">{type === "temperature" ? "Temperature" : "Humidity"} Graph</h2>
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey={type} stroke={type === "temperature" ? "red" : "blue"} strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Graphs;
