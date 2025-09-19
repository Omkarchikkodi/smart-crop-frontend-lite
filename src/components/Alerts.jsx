import translations from "../translations";

const Alerts = ({ lang }) => {
  // Dummy alerts for now
  const alerts = [
    "Heavy rainfall expected tomorrow.",
    "Pest infestation warning in nearby region.",
  ];

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-3">Alerts</h2>
      <ul className="list-disc ml-5">
        {alerts.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
