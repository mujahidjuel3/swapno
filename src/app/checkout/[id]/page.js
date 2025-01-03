"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from "../../../lib/utils"; // Utility for formatting currency
import { HiPlus, HiMinus } from "react-icons/hi";
import { FaMotorcycle } from "react-icons/fa6";

const Checkout = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Paragon Chicken Ball 250gm",
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      name: "Yan Pure Apple 100% Juice 946ml",
      price: 1095,
      quantity: 1,
    },
    {
      id: 3,
      name: "Dettol Antibacterial Body Wash 250ml",
      price: 200,
      quantity: 1,
    },
  ]);

  const [deliverySlot, setDeliverySlot] = useState({
    date: "2025-01-02",
    time: "2:00 PM - 3:00 PM",
  });

  const handleQuantityChange = (id, increment) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 container mx-auto py-8 px-4 lg:px-8">
      {/* Cart Summary */}
      <Card className="flex-1 w-[40%]">
        {/* Delivery and Cross-Sell */}
        <Card className="flex-1">
          <CardHeader className="bg-blue-600 py-1">
            <CardTitle className="flex gap-1"> <FaMotorcycle className="text-xl"/> 1-2 hours</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <Input
                type="date"
                value={deliverySlot.date}
                onChange={(e) =>
                  setDeliverySlot((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot
              </label>
              <Select
                onValueChange={(value) =>
                  setDeliverySlot((prev) => ({ ...prev, time: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={deliverySlot.time} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2:00 PM - 3:00 PM">
                    2:00 PM - 3:00 PM
                  </SelectItem>
                  <SelectItem value="3:00 PM - 4:00 PM">
                    3:00 PM - 4:00 PM
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <CardHeader className="w-[50%]">
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(item.price)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        <HiMinus />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <HiPlus />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="lg:w-[30%]">
        <CardHeader>
          <CardTitle>Cross-Sell Products</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>Egg Loose</span>
              <span>{formatCurrency(10.83)}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Bagda Chingri</span>
              <span>{formatCurrency(920)}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Kinder Joy</span>
              <span>{formatCurrency(100)}</span>
            </li>
          </ul>
        </CardContent>
        <TableRow>
                <TableCell colSpan="2" className="font-semibold text-right">
                  Subtotal:
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(subtotal)}
                </TableCell>
              </TableRow>
              <div>
                <Button size="lg" className="w-full bg-blue-500 text-white">
                  Confirm
                </Button>
              </div>
      </Card>

      {/* Cross-Sell Products */}
      <Card className="lg:w-[30%]">
        <CardHeader>
          <CardTitle>Cross-Sell Products</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>Egg Loose</span>
              <span>{formatCurrency(10.83)}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Bagda Chingri</span>
              <span>{formatCurrency(920)}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Kinder Joy</span>
              <span>{formatCurrency(100)}</span>
            </li>
          </ul>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default Checkout;
