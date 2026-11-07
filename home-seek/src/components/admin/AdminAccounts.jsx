import { deleteAccount } from "../../data/accountsStore";

const TYPE_LABELS = { korisnik: "Korisnik", agencija: "Agencija" };

export default function AdminAccounts({ accounts, onChange, onError }) {
  async function handleDelete({ id, name }) {
    if (!window.confirm(`Obrisati nalog „${name}“ i sve njegove oglase?`)) return;
    try {
      await deleteAccount(id);
      await onChange();
    } catch {
      onError("Nalog nije obrisan. Pokušajte ponovo.");
    }
  }

  return (
    <div className="admin-table">
      <table>
        <thead>
          <tr>
            <th scope="col">Naziv</th>
            <th scope="col">Vrsta</th>
            <th scope="col">Mejl</th>
            <th scope="col">Telefon</th>
            <th scope="col">PIB</th>
            <th scope="col">Sačuvano</th>
            <th scope="col"><span className="admin-sr-only">Akcije</span></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.name}</td>
              <td>{account.isAdmin ? "Administrator" : TYPE_LABELS[account.type]}</td>
              <td>{account.email}</td>
              <td>{account.phone}</td>
              <td>{account.pib ?? "-"}</td>
              <td>{account.favoriteCount}</td>
              <td className="admin-row-actions">
                {!account.isAdmin && (
                  <button className="admin-action danger" type="button" onClick={() => handleDelete(account)}>Obriši</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
