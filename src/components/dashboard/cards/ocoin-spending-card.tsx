"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ocoinSpendingData } from "@/data/order-data";
import { BarChart } from "../charts/bar-chart";
import { SelectMonthButton } from "../lists/select-month-button";

export function OcoinSpendingCard() {
  return (
    <Card className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-col md:flex-row items-center justify-between space-y-0 pb-2 px-6">
        <div>
          <CardTitle className="text-xl text-center md:text-start font-bold text-white">
            Ocoin Spending Pattern
          </CardTitle>
          <p className="text-gray-400 text-sm mt-1">
            You can track all Ocoin spending data here
          </p>
        </div>
        <SelectMonthButton/>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <BarChart data={ocoinSpendingData} />
      </CardContent>
    </Card>
  );
}
