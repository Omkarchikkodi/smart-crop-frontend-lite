import translations from "../translations";

const MarketList = ({ lang }) => {
  // Dummy market data
  const markets = [
    { crop: "Rice", price: "₹2000/quintal" },
    { crop: "Sugarcane", price: "₹3200/quintal" },
    { crop: "Maize", price: "₹1800/quintal" },
  ];

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold">{translations[lang].markets}</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-green-200">
            <th className="border p-2">Crop</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((m, i) => (
            <tr key={i}>
              <td className="border p-2">{m.crop}</td>
              <td className="border p-2">{m.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketList;
