import DataItem from './DataItem';

interface Props {
  row: string[];
  isHeader: boolean;
}

export default function DataRow({ row, isHeader }: Props) {
  return (
    <tr>
      {row.map((i, idx) => (
        <DataItem text={i} isHeader={isHeader} isRowHeader={idx === 0} />
      ))}
    </tr>
  );
}
