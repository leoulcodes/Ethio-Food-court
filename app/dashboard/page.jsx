
"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
export default function RevenueChart({ data }) {
return (
  <ResponsiveContainer width="100%" height={300}>
   <BarChart data={data}>
    <XAxis dataKey="area" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="revenue" fill="#1B4D8E" />
   </BarChart>
 </ResponsiveContainer>);
}