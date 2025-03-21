"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RemixedProductData } from "@/types/dashboard";
import Image from "next/image";

interface RemixedProductsListProps {
  products: RemixedProductData[];
}

/**
 * RemixedProductsList Component
 *
 * A responsive component that displays a list of remixed products with their metrics.
 * Optimized for all screen sizes from mobile to desktop.
 *
 * @param {RemixedProductData[]} products - Array of product data to display
 */
export function RemixedProductsList({ products }: RemixedProductsListProps) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 p-4"
        >
          {/* Product Avatar - Fixed size across all breakpoints */}
          <Avatar className="h-16 w-16 rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl">
            <AvatarImage
              className="!bg-black/40"
              src={product.image}
              alt={product.name}
            />
            <AvatarFallback className="rounded-lg">
              {product.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          {/* Product Information */}
          <div className="flex flex-col">
            <h3 className="text-md font-semibold text-white">{product.name}</h3>
            <span className="text-sm text-gray-400">{product.date}</span>
          </div>

          {/* 
            Metrics Container
            - Mobile: Full width, wrapped items with equal spacing
            - Tablet: Horizontal layout with appropriate spacing 
            - Desktop: Original spacing maintained with larger gaps
          */}
          <div className="w-full sm:w-auto sm:ml-auto flex flex-wrap justify-between sm:flex-nowrap md:flex-nowrap sm:justify-end sm:items-center gap-4 sm:gap-2 md:gap-0 sm:space-x-4 md:space-x-8 lg:space-x-14 mt-4 sm:mt-0">
            {/* Time Remixed Metric */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/history.png"
                  alt="Fire"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-5 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white">
                    {product.timeRemixed}
                  </span>
                  {/* Prevent text wrapping on small screens */}
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    Time Remixed
                  </span>
                </div>
              </div>
            </div>

            {/* Downloads Metric */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/download.png"
                  alt="Fire"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-5 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white">
                    {product.downloads}
                  </span>
                  <span className="text-xs text-gray-400">Download</span>
                </div>
              </div>
            </div>

            {/* Views Metric */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/views.png"
                  alt="Fire"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-4 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white">
                    {product.views}
                  </span>
                  <span className="text-xs text-gray-400">Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
