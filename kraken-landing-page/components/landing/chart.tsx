import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts"

export default function MiniPriceChart() {
    const data = [
        { day: "Mon", price: 1499 },
        { day: "Tue", price: 1420 },
        { day: "Wed", price: 1430 },
        { day: "Thu", price: 1430 },
        { day: "Fri", price: 1400 },
        { day: "Sat", price: 1390 },
        { day: "Sun", price: 1350 },
    ]

    return (
        <div className="w-[420px] h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        opacity={0.1}
                    />

                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        domain={["dataMin - 50", "dataMax + 20"]}
                    />


                    <Line
                        type="monotone"
                        dataKey="price"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}