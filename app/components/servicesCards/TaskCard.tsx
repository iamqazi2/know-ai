"use client";

import { useEffect, useState } from "react";
import { CheckCircle, RefreshCw, Clock } from "lucide-react";

const tasks = [
  {
    label: "Social media post",
    icon: <CheckCircle size={18} />,
    status: "done",
  },
  {
    label: "Employee Tracking",
    icon: <RefreshCw size={18} />,
    status: "loading",
  },
  {
    label: "Payment reminder",
    icon: <Clock size={18} />,
    status: "done",
  },
  {
    label: "Cost Management",
    icon: <Clock size={18} />,
    status: "done",
  },
];

const ITEM_HEIGHT = 72;

const TaskCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (direction === "up") {
          if (prev === tasks.length - 1) {
            setDirection("down");
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev === 0) {
            setDirection("up");
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [direction]);

  // This is the index that will appear at the **center of the container**
  const middleSlot = 1; // assuming 3 items visible, center is index 1

  return (
    <div className="bg-black rounded-2xl px-4 pb-5 shadow-lg border-t-2 border border-gray-800">
      <div className="relative overflow-hidden mx-1 h-[260px]">
        <div
          className="transition-transform duration-700 ease-in-out space-y-4 py-4"
          style={{
            transform: `translateY(${(middleSlot - activeIndex) * ITEM_HEIGHT}px)`,
          }}
        >
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border border-t-2 border-white/30 rounded-[6px] p-2 transform transition-all duration-500 ease-in-out
                ${index === activeIndex ? "scale-100 bg-zinc-800 z-10" : "scale-90 opacity-60"}
              `}
            >
              <span className="flex items-center gap-2 text-gray-300">
                {task.icon} {task.label}
              </span>
              {task.status === "done" && (
                <CheckCircle className="text-green-400" size={18} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Automate repetitive tasks</h3>
        <p className="text-gray-400 text-sm">
          We help you streamline internal operations by automating manual workflows
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
