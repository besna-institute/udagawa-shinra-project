import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CSSProperties } from "react";

type Slot = "演繹推論" | "推測対象" | "対象外";
export interface DataFormatTableRow {
  label: JSX.Element;
  description: JSX.Element;
  note: JSX.Element;
  slot?: Slot;
}

interface Props {
  rows: DataFormatTableRow[];
}

const head = {
  label: "ラベル",
  description: "説明",
  note: "備考",
};
const theme: Record<Slot, CSSProperties> = {
  対象外: {
    background: "#cccccc",
  },
  推測対象: {
    background: "#ffff00",
  },
  演繹推論: {
    background: "#00ffff",
  },
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
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                ...(row.slot ? theme[row.slot] : {}),
              }}
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
