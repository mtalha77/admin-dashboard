"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { financialData } from "@/data/financial-data";
import { PieChart } from "../charts/pie-chart";
import Image from "next/image";
import { SelectMonthButton } from "../lists/select-month-button";

export function FinancialOverviewCard() {
  return (
    <Card className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-col md:flex-row items-center justify-between space-y-0 pb-2 px-6">
        <div>
          <CardTitle className="text-xl text-center md:text-start font-bold text-white">
            Financial Overview
          </CardTitle>
          <p className="text-gray-400 text-sm mt-1">
            You can track all users data here
          </p>
        </div>

        <SelectMonthButton />
      </CardHeader>
      <CardContent className="px-6 pb-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col space-y-8">
          {financialData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  border: `2px solid ${item.color}`,
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              >
                {item.icon === "dollar" && (
                  <Image
                    src="/icons/dollar.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                )}
                {item.icon === "credit-card" && (
                  <Image
                    src="/icons/subscrptions.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                )}
                {item.icon === "coin" && (
                  <Image
                    src="/icons/coin-income.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                )}
              </div>
              <div className="ml-4 max-w-40 text-wrap">
                <div className="text-2xl font-bold text-white">
                  ${item.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[250px] h-[250px] mt-2">
          <PieChart data={financialData} />
        </div>
      </CardContent>
    </Card>
  );
}
