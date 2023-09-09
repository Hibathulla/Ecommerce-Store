"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Range } from "react-range";

const PriceFilter = () => {
  const [price, setPrice] = useState<number[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Price</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Range
            step={0.3}
            min={0}
            max={100}
            values={price}
            onChange={(values) => setPrice(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  backgroundColor: "red",
                }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
