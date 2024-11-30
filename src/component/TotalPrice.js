"use client";

const TotalPrice = ({ cartItems }) => {
  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity) || 0;
    return acc + itemPrice * itemQuantity;
  }, 0);

  return (
    <div className="p-4 border-t">
      <div className="flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>৳{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
