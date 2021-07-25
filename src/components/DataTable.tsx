import { Table } from 'reactstrap';
import DataRow from './DataRow';

interface Props {
  table: string[][];
}

export default function DataTable({ table }: Props) {
  return (
    <Table>
      <thead>
        {table
          .filter((_, idx) => idx === 0)
          .map((i) => (
            <DataRow row={i} isHeader />
          ))}
      </thead>
      <tbody>
        {table
          .filter((_, idx) => idx !== 0)
          .map((i) => (
            <DataRow row={i} isHeader={false} />
          ))}
      </tbody>
    </Table>
  );
}
