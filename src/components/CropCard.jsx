import translations from "../translations";

const CropCard = ({ lang }) => {
  // Dummy crop suggestions
  const crops = ["Rice", "Sugarcane", "Maize"];

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold">{translations[lang].crops}</h2>
      <div className="flex gap-4">
        {crops.map((crop, i) => (
          <div key={i} className="bg-green-100 px-3 py-2 rounded shadow">
            🌱 {crop}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropCard;
