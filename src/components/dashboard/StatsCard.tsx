interface StatsCardProps {
  label: string;
  value: number;
  type?: 'default' | 'success' | 'danger' | 'warning';
}

export default function StatsCard({ label, value, type = 'default' }: StatsCardProps) {
  const colors = {
    default: 'text-gray-900',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600',
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <span className="text-sm text-gray-500 uppercase tracking-wider">{label}</span>
      <span className={`text-3xl font-bold mt-1 ${colors[type]}`}>
        {value}
      </span>
    </div>
  );
}