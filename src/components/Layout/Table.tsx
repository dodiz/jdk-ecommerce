import { EditIcon, DeleteIcon } from "~icons";
import { useMemo } from "react";
import styles from "./Layout.module.scss";

type BackofficeTableProps<T> = {
  data: T[] | undefined;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
};

export const Table = <T extends object>({
  data,
  onEdit,
  onDelete,
}: BackofficeTableProps<T>) => {
  const headers = useMemo(() => Object.keys(data?.[0] || {}), [data]);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          <th />
        </tr>
      </thead>
      <tbody>
        {!data
          ? "Loading"
          : data.map((item, i) => (
              <tr key={i}>
                {Object.values(item).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
                <td className={styles.editCell}>
                  <EditIcon
                    className={styles.editIcon}
                    onClick={() => onEdit(item)}
                  />
                  <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={() => onDelete(item)}
                  />
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
