// script.js

// Function to handle form submission and generate bill receipt
function generateBill() {
    const customerName = document.getElementById('customerName').value;
    const items = document.getElementById('items').value;
    const amount = document.getElementById('amount').value;

    if (!customerName || !items || !amount) {
        alert('Please fill all fields.');
        return;
    }

    const receipt = `\n--- Bill Receipt ---\n` +
                     `Customer Name: ${customerName}\n` +
                     `Items: ${items}\n` +
                     `Total Amount: $${amount}\n` +
                     `Date: ${new Date().toISOString()}\n` +
                     `-------------------`;

    document.getElementById('receipt').innerText = receipt;
}

// Function to print the bill receipt
function printBill() {
    const receiptContent = document.getElementById('receipt').innerText;
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Print Bill</title></head><body><pre>${receiptContent}</pre></body></html>`);
    printWindow.document.close();
    printWindow.print();
}