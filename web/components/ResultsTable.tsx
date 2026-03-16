export default function ResultsTable({ rows }: { rows: any[] }) {
  return (
    <table border={1} cellPadding={6} style={{ marginTop: 20, width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Part Number</th>
          <th>Qty</th>
          <th>Manufacturer</th>
          <th>Lifecycle</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Total</th>
          <th>Alternates</th>
          <th>Error</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{r.PartNumber}</td>
            <td>{r.Quantity}</td>
            <td>{r.Manufacturer}</td>
            <td>{r.Lifecycle}</td>
            <td>{r.Stock}</td>
            <td>{r.UnitPrice}</td>
            <td>{r.TotalPrice}</td>
            <td>{r.Alternates?.join(", ")}</td>
            <td>{r.Error}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
