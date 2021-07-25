import { useEffect } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import { loadTable } from './redux/table';
import { useAppDispatch, useAppSelector } from './redux/hooks';

export default function App() {
  const dispatch = useAppDispatch();
  const table = useAppSelector((state) => state.table);
  useEffect(
    function () {
      const promise = dispatch(loadTable());
      return () => promise.abort();
    },
    [dispatch]
  );
  return (
    <div className="App">
      <DataTable table={table} />
    </div>
  );
}
