import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";

function App() {
  const [billNo, setBillNO] = useState("");
  const [invoice, setInvoice] = useState("");
  const [noDate, setNoDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [address, setAddress] = useState("");
  const [gst, setGstin] = useState("");
  const [billTo, setBillTo] = useState("");
  const [transactionAmt, settransactionAmt] = useState("");
  const [subTotal, setsubTotal] = useState("");
  const [total, setTotal] = useState("");
  const [tax, setTax] = useState("");




  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");

  const [arr, setArr] = useState([]);

  function add() {
    let el = { item, quantity, rate, amount };

    setArr((oldArray) => [el, ...oldArray]);

    setItem("");
    setQuantity("");
    setRate("");
    setAmount("");
  }

  function printDocument() {
    const input = document.getElementById("divToPrint");

    const divHeight = input.clientHeight;
    const divWidth = input.clientWidth;
    const ratio = divHeight / divWidth;

    html2canvas(input, { scale: "3" }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const pdfDOC = new jsPDF("l", "mm", "a4"); //  use a4 for smaller page

      const width = pdfDOC.internal.pageSize.getWidth();
      let height = pdfDOC.internal.pageSize.getHeight();
      height = ratio * width;

      pdfDOC.addImage(imgData, "JPEG", 5, 6, width - 10, height - 10);
      pdfDOC.save("summary.pdf"); //Download the rendered PDF.
    });
  }

  return (
    <div style={{ fontFamily: "arial" }}>
      <div style={{ margin: "auto", width: "80%", padding: 9 }}>
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setInvoice(e.target.value)}
          type="text"
          placeholder="Invoice"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setNoDate(e.target.value)}
          type="text"
          placeholder="No date"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setDueDate(e.target.value)}
          type="text"
          placeholder="Due date"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setEventName(e.target.value)}
          type="text"
          placeholder="Event Name"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Address"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setGstin(e.target.value)}
          type="text"
          placeholder="GSTIN"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setBillTo(e.target.value)}
          type="text"
          placeholder="Bill To"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setBillNO(e.target.value)}
          type="text"
          placeholder="Bill No"
        />{" "}
        <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => settransactionAmt(e.target.value)}
          type="text"
          placeholder="Transaction Amt"
        />{" "}
           <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setsubTotal(e.target.value)}
          type="text"
          placeholder="Sub total"
        />{" "}
           <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setTax(e.target.value)}
          type="text"
          placeholder="Tax"
        />{" "}
           <br />
        <input
          style={{ width: "50%", margin: 2, padding: 3 }}
          onChange={(e) => setTotal(e.target.value)}
          type="text"
          placeholder="Total"
        />{" "}
        <br />
        <div style={{ border: "0px solid green",display:"flex",gap:3 }}>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            placeholder="item"
          />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            placeholder="quantity"
          />
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="text"
            placeholder="rate"
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="amount"
          />

          <button
            onClick={add}
            style={{
              cursor: "pointer",
              padding: 3,
              borderRadius: 4,
              color: "white",
              background: "blue",
              border:"none"
            }}
          >
            Add
          </button>
        </div>
        <br />
        <button
          style={{
            cursor: "pointer",
            background: "blue",
            border: "none",
            outline: "none",
            borderRadius: 3,
            color: "white",
            padding: 6,
            width: 200,
          }}
          onClick={printDocument}
        >
          Download PDF
        </button>
      </div>

      <div
        id="divToPrint"
        style={{ border: "1px dashed black", width: "80%", margin: "auto" }}
      >
        <p style={{ textAlign: "center", fontWeight: "bold" }}>INVOICE</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 4,
          }}
        >
          <table>
            <tr>
              <th>Invoice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</th>
              <td>{invoice}</td>
            </tr>
            <tr>
              <th>No:Date&nbsp;&nbsp; :</th>
              <td>{noDate}</td>
            </tr>
            <tr>
              <th>Due Date&nbsp;:</th>
              <td>{dueDate}</td>
            </tr>
          </table>
        </div>

        <div style={{ padding: 3 }}>
          <p style={{ fontWeight: "bold" }}>{eventName}</p>

          <p style={{ fontWeight: "bold" }}>Registered Address :</p>

          <div
            style={{
              width: 300,
              border: "0px solid red",
              wordBreak: "break-word",
              lineHeight: 1.5,
            }}
          >
            {address}
          </div>
          <p
            style={{
              width: 300,
              border: "0px solid red",
              wordBreak: "break-word",
              lineHeight: 1.5,
            }}
          >
            GSTIN : {gst}
          </p>
         
  
          <table
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <tr>
              <th style={{ border: "1px solid black" }}>Bill To :</th>
              <th style={{ border: "1px solid black" }}>Number :</th>
            </tr>
            <tr>
              <td style={{ textAlign: "center", border: "1px solid black" }}>
                {billTo}
              </td>
              <td style={{ textAlign: "center", border: "1px solid black" }}>
                {billNo}
              </td>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                Transaction Amount : Rs.{transactionAmt}{" "}
              </td>
            </tr>
          </table>
          <br/>
          <table
            style={{
              width: "80%",
              margin: "auto",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <tr>
              <th style={{ border: "1px solid black" }}>Item :</th>
              <th style={{ border: "1px solid black" }}>Quantity :</th>
              <th style={{ border: "1px solid black" }}>Rate :</th>
              <th style={{ border: "1px solid black" }}>Amount :</th>
            </tr>

            {arr.map((e) => {
              return (
                <tr>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {e.item}
                  </td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {e.quantity}
                  </td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {e.rate}
                  </td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {e.amount}
                  </td>
                </tr>
              );
            })}
          </table>


          <br/>
          
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 4,
          }}
        >
          <table>
            <tr>
              <th>Sub Total :</th>
              <td>{subTotal}</td>
            </tr>
            <tr>
              <th style={{textAlign:"left"}}>Tax&nbsp;&nbsp; :</th>
              <td>{tax}</td>
            </tr>
            <tr>
              <th style={{textAlign:"left"}}>Total&nbsp;:</th>
              <td>{total}</td>
            </tr>
          </table>

        </div>
        <br/>
        <p>Terms</p>
        <p>By receiving this invoice, the user has paid the appropriate fees to 
          TFG through Payment Gate and accepts the company's privacy in connection with the transaction.</p>

          <p>For <span style={{fontWeight:"bold"}}>{eventName}</span></p>
          <br/>
          <br/>

          <p>Authorised Signatory</p>
          <br/>
          <br/>

          <p>* Bills sent through mail need not to be signed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
//
