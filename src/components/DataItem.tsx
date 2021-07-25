import './DataItem.css';

interface Props {
  text: string;
  isHeader: boolean;

  isRowHeader: boolean;
}

export default function DataItem({ text, isHeader, isRowHeader }: Props) {
  if (isHeader) return <th className="itemHeader">{text}</th>;
  else if (isRowHeader)
    return (
      <th className="itemRowHeader" scope="row">
        {text}
      </th>
    );
  return <td className="item">{text === 'X' ? '✔' : text}</td>;
}
