import { Truck, ShieldCheck, Headset, CreditCard } from "lucide-react";

const Services = () => {
  return (
    <div className="hidden pt-40  lg:flex justify-around items-center bg-white shadow-md py-6 px-8">
      {/* Service 1 */}
      <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-3 py-1 rounded">
        <Truck className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full" size={33} />
        <div>
          <h4 className="text-lg font-semibold">60 Mins Delivery</h4>
          <p className="text-sm text-gray-600">Free shipping over 400TK</p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-3 py-1 rounded">
        <ShieldCheck className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full" size={33} />
        <div>
          <h4 className="text-lg font-semibold">Authorized Products</h4>
          <p className="text-sm text-gray-600">Within 30 days for an exchange</p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-3 py-1 rounded">
        <Headset className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full" size={33} />
        <div>
          <h4 className="text-lg font-semibold">Customer Service Support</h4>
          <p className="text-sm text-gray-600">9am to 9pm</p>
        </div>
      </div>

      {/* Service 4 */}
      <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-3 py-1 rounded">
        <CreditCard className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full" size={33} />
        <div>
          <h4 className="text-lg font-semibold">Flexible Payments</h4>
          <p className="text-sm text-gray-600">Pay with multiple credit cards</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
