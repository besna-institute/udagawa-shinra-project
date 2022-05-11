import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export interface DataFormatTableRow {
  label: JSX.Element;
  description: JSX.Element;
  note: JSX.Element;
  slot?: string;
}

interface Props {
  rows: DataFormatTableRow[];
}

const head = {
  label: "ラベル",
  description: "説明",
  note: "備考",
};

export const DataFormatTable = ({ rows }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="data format table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{head.label}</TableCell>
            <TableCell align="center">{head.description}</TableCell>
            <TableCell align="center">{head.note}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.label}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.label}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
