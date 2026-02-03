import { Badge } from "@/components/ui/badge";

interface Param {
  name: string;
  type: string;
  required?: boolean;
  description: string;
}

export function ParamTable({ params }: { params: Param[] }) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 pr-4 text-left font-medium text-text-muted">Name</th>
            <th className="py-2 pr-4 text-left font-medium text-text-muted">Type</th>
            <th className="py-2 text-left font-medium text-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((param) => (
            <tr key={param.name} className="border-b border-border/50">
              <td className="py-3 pr-4">
                <code className="font-mono text-xs text-accent">{param.name}</code>
                {param.required && (
                  <Badge variant="destructive" className="ml-2 text-[10px]">
                    required
                  </Badge>
                )}
              </td>
              <td className="py-3 pr-4">
                <code className="font-mono text-xs text-text-muted">{param.type}</code>
              </td>
              <td className="py-3 text-text-secondary">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
