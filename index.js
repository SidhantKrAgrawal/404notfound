import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const airDropSol = async () => {
//   try {
//     const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
//     const fromAirDropSignature = await connection.requestAirdrop(
//       publicKey,
//       2 * LAMPORTS_PER_SOL
//     );
//     await connection.confirmTransaction(fromAirDropSignature);
//   } catch (err) {
//     console.log(err);
//   }
// };
// const main = async () => {
//   await airDropSol();
// };
// main();
