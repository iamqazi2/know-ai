"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  UserCheck,
  DollarSign,
  MessageCircle,
  FileText,
  Users,
} from "lucide-react";

const tasks = [
  {
    label: " Social Media Posting & Scheduling",
    icon: <Calendar size={18} />,
  },
  {
    label: "Employee Attendance & Tracking",
    icon: <UserCheck size={18} />,
  },
  {
    label: "Payment & Invoice Reminders",
    icon: <DollarSign size={18} />,
  },
  {
    label: "Customer Support Chatbots",
    icon: <MessageCircle size={18} />,
  },
  {
    label: "Data Entry & Reporting",
    icon: <FileText size={18} />,
  },
  {
    label: "Lead Management & CRM Updates",
    icon: <Users size={18} />,
  },
];

const ITEM_HEIGHT = 40;

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
    <div className="bg-black/10 rounded-2xl px-4 pb-5 shadow-lg border-t-2 border border-[#8D6AE6]/20">
      <div className="relative overflow-hidden mx-1 h-[260px]">
        <div
          className="transition-transform duration-700 ease-in-out space-y-4 py-4"
          style={{
            transform: `translateY(${
              (middleSlot - activeIndex) * ITEM_HEIGHT
            }px)`,
          }}
        >
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between border text-white border-t-2 border-[#8D6AE6]/30 rounded-[6px] p-2 transform transition-all duration-500 ease-in-out
                ${
                  index === activeIndex
                    ? "scale-100 bg-[#8D6AE6]/30 backdrop-blur-md z-10"
                    : "scale-90 opacity-60 text-white blur-[.8px] "
                }
              `}
            >
              <span className="flex items-center text-[12px] gap-2 text-white">
                {task.icon} {task.label}
              </span>
              {index !== activeIndex && (
                <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-[6px]"></div>
              )}
              {/* {task.status === "done" && (
                <CheckCircle className="text-green-400" size={18} />
              )} */}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">
          Automate repetitive tasks
        </h3>
        <p className="text-gray-400 text-sm">
          We help you streamline internal operations by automating manual
          workflows
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
